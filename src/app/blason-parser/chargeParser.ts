import * as P from 'parsimmon';
import {
  Charge,
  charges,
  Cross,
  crossLimbs,
  Crown,
  CrownType,
  crownTypes,
  Eagle,
  EagleAttitude,
  eagleAttitudes,
  Escutcheon,
  FleurDeLys,
  Lion,
  LionAttitude,
  lionAttitudes,
  LionHead,
  lionHeads,
  LionTail,
  lionTails,
  Lozenge,
  Mullet,
  MulletPoints,
  mulletPoints,
  Roundel,
} from '../model/charge';
import { aParser, buildAltParser, constStr, lineParser, numberParser } from './parser.helper';
import { identity } from '../../utils/identity';
import { gules, MetalsAndColours, or } from '../model/tincture';
import { cannotHappen } from '../../utils/cannot-happen';
import { metalOrColourParserFromName, tinctureParserFromName } from './tinctureParser';
import {
  availableDispositions,
  CountAndDisposition,
  isNotOne,
  SupportedNumber,
  supportedNumbers,
} from '../model/countAndDisposition';
import { OrdinaryCross } from '../model/ordinary';
import { stringifyDisposition } from '../model/stringify/stringify.helper';

const countParser: P.Parser<SupportedNumber> = P.alt(aParser, ...supportedNumbers.filter(isNotOne).map(numberParser));

const countAndDispositionParser = (count: SupportedNumber): P.Parser<CountAndDisposition> => {
  if (count === 1) {
    return P.of({ count, disposition: 'default' });
  } else {
    return P.whitespace
      .then(
        buildAltParser(
          availableDispositions.filter((x) => x !== 'default'),
          (disposition) => 'in ' + stringifyDisposition(disposition)
        )
      )
      .fallback('default' as const)
      .map((disposition) => ({ count, disposition }));
  }
};

const lionParser = (count: SupportedNumber): P.Parser<Lion> => {
  const attitudeParser: P.Parser<LionAttitude> = buildAltParser(lionAttitudes, identity);
  const headParser: P.Parser<LionHead> = P.alt(
    P.regex(/gardant/i).result('guardant'),
    buildAltParser(lionHeads, identity)
  );
  const tailParser: P.Parser<LionTail> = buildAltParser(lionTails, identity);

  const lionNameParser = (count === 1 ? P.regex(/lion/i) : P.regex(/lions/i)).result('lion' as const);

  return P.seq(
    lionNameParser,
    P.whitespace.then(attitudeParser).fallback('rampant' as const),
    P.whitespace.then(headParser).fallback(null),
    P.whitespace.then(P.regex(/tail/i)).then(P.whitespace).then(tailParser).fallback(null),
    countAndDispositionParser(count),
    P.whitespace.then(tinctureParserFromName),
    P.whitespace
      .then(P.regex(/armed and langued/i))
      .then(P.whitespace)
      .then(tinctureParserFromName)
      .fallback(gules)
  ).map(
    ([name, attitude, head, tail, countAndDisposition, tincture, armedAndLangued]): Lion => {
      return {
        name,
        attitude,
        tincture,
        armedAndLangued,
        tail,
        head,
        countAndDisposition,
      };
    }
  );
};

const eagleParser = (count: SupportedNumber) => {
  const eagleNameParser = P.regex(/eagles?/i).desc('eagle');
  const eagleAttitudeParser: P.Parser<EagleAttitude> = buildAltParser(eagleAttitudes, identity);

  return P.seq(
    eagleNameParser.skip(P.whitespace).then(eagleAttitudeParser),
    countAndDispositionParser(count),
    P.whitespace.then(tinctureParserFromName),
    P.whitespace
      .then(P.regex(/beaked and armed/i))
      .then(P.whitespace)
      .then(tinctureParserFromName)
      .fallback(null)
  ).map(
    ([attitude, countAndDisposition, tincture, beakedAndArmed]): Eagle => {
      return {
        name: 'eagle',
        countAndDisposition,
        attitude,
        tincture,
        beakedAndArmed: beakedAndArmed || tincture,
      };
    }
  );
};

const fleurDeLysParser = (): P.Parser<FleurDeLys> => {
  return countParser.trim(P.optWhitespace).chain((count) => {
    return P.seq(
      P.regexp(/Fleurs?[- ]de[- ]l[yi]s/i)
        .desc('fleur de lys')
        .result('fleurdelys' as const),
      countAndDispositionParser(count),
      P.whitespace.then(tinctureParserFromName)
    ).map(([name, countAndDisposition, tincture]): FleurDeLys => ({ name, countAndDisposition, tincture }));
  });
};

const escutcheonParser = (): P.Parser<Escutcheon> => {
  return countParser.trim(P.optWhitespace).chain((count) => {
    return P.seq(
      P.regexp(/escutcheons?/i)
        .desc('escutcheon')
        .result('escutcheon' as const),
      countAndDispositionParser(count),
      P.whitespace.then(tinctureParserFromName)
    ).map(([name, countAndDisposition, tincture]): Escutcheon => ({ name, countAndDisposition, tincture }));
  });
};

const roundelParser = (): P.Parser<Roundel> => {
  return countParser.trim(P.optWhitespace).chain((count) => {
    return P.seq(
      P.alt(
        P.seq(
          P.regexp(/roundels?/i)
            .desc('roundel')
            .result('roundel' as const),
          countAndDispositionParser(count),
          P.whitespace.then(tinctureParserFromName)
        ).map(([name, countAndDisposition, tincture]) => [name, countAndDisposition, tincture, 'nothing'] as const),
        P.seq(
          P.regexp(/bezants?/i)
            .desc('bezant')
            .result('roundel' as const),
          countAndDispositionParser(count)
        ).map(([name, countAndDisposition]) => [name, countAndDisposition, or, 'nothing'] as const),
        P.seq(
          P.regexp(/annulets?/i)
            .desc('annulet')
            .result('roundel' as const),
          countAndDispositionParser(count),
          P.whitespace.then(tinctureParserFromName)
        ).map(([name, countAndDisposition, tincture]) => [name, countAndDisposition, tincture, 'voided'] as const)
      )
    ).map(
      ([[name, countAndDisposition, tincture, inside]]): Roundel => ({ name, countAndDisposition, tincture, inside })
    );
  });
};

const lozengeParser = (): P.Parser<Lozenge> => {
  return countParser.trim(P.optWhitespace).chain((count) => {
    return P.seq(
      P.alt(
        P.regexp(/lozenges?/i).result(['lozenge', 'nothing'] as const),
        P.regexp(/mascles?/i).result(['lozenge', 'voided'] as const),
        P.regexp(/rustres?/i).result(['lozenge', 'pierced'] as const)
      ),
      countAndDispositionParser(count),
      P.whitespace.then(tinctureParserFromName)
    ).map(
      ([[name, inside], countAndDisposition, tincture]): Lozenge => ({ name, countAndDisposition, tincture, inside })
    );
  });
};

const mulletParser = (): P.Parser<Mullet> => {
  return countParser.trim(P.optWhitespace).chain((count) => {
    return P.seq(
      P.alt<'mullet'>(constStr('mullet', 'mullets'), constStr('mullet')),
      P.whitespace
        .then(P.string('of'))
        .then(P.whitespace)
        .then(P.alt<MulletPoints>(...mulletPoints.map(numberParser)))

        .skip(P.string('points'))
        .fallback(5 as const),
      P.whitespace.then(constStr('pierced')).fallback('nothing' as const),
      countAndDispositionParser(count),
      P.whitespace.then(tinctureParserFromName)
    ).map(
      ([name, points, inside, countAndDisposition, tincture]): Mullet => ({
        name,
        countAndDisposition,
        tincture,
        points,
        inside,
      })
    );
  });
};

const crownParser = (count: SupportedNumber) => {
  const crownNameParser = P.regex(/crowns?/i).desc('crown');
  const crownTypeParser: P.Parser<CrownType> = buildAltParser(crownTypes, identity);

  return P.seq(
    crownNameParser.skip(P.whitespace).then(crownTypeParser),
    countAndDispositionParser(count),
    P.whitespace.then(tinctureParserFromName).fallback(or)
  ).map(
    ([type, countAndDisposition, tincture]): Crown => {
      return {
        name: 'crown',
        countAndDisposition,
        type,
        tincture,
      };
    }
  );
};

const fimbriatedParser: P.Parser<MetalsAndColours | null> = P.whitespace
  .then(P.string('fimbriated'))
  .then(P.whitespace)
  .then(metalOrColourParserFromName)
  .fallback(null);

export const chargeCrossParser = (): P.Parser<Cross> => {
  return P.alt(
    countParser.chain((count) => {
      return P.seq(
        P.alt<'cross'>(constStr('cross', 'crosses'), constStr('cross')),
        P.whitespace.then(buildAltParser(crossLimbs, identity)),
        countAndDispositionParser(count),
        P.whitespace.then(tinctureParserFromName)
      ).map(([name, limbs, countAndDisposition, tincture]): Cross => ({ name, countAndDisposition, tincture, limbs }));
    }),
    P.seq(
      aParser.then(constStr('cross')).skip(P.whitespace),
      lineParser.skip(P.whitespace),
      tinctureParserFromName,
      fimbriatedParser
    ).map(([name, line, tincture, fimbriated]): OrdinaryCross => ({ name, tincture, line, fimbriated }))
  );
};

export const crossParser = (): P.Parser<Cross | OrdinaryCross> => {
  return P.alt(
    P.seq(
      aParser.then(constStr('cross', 'cross potenty')).skip(P.whitespace),
      tinctureParserFromName,
      fimbriatedParser
    ).map(([name, tincture, fimbriated]): OrdinaryCross => ({ name, tincture, line: 'potenty', fimbriated })),
    countParser.chain((count) => {
      return P.seq(
        P.alt<'cross'>(constStr('cross', 'crosses'), constStr('cross')),
        P.whitespace.then(buildAltParser(crossLimbs, identity)),
        countAndDispositionParser(count),
        P.whitespace.then(tinctureParserFromName)
      ).map(([name, limbs, countAndDisposition, tincture]): Cross => ({ name, countAndDisposition, tincture, limbs }));
    }),
    P.seq(aParser.then(constStr('cross')).skip(P.whitespace), tinctureParserFromName, fimbriatedParser).map(
      ([name, tincture, fimbriated]): OrdinaryCross => ({ name, tincture, line: 'straight', fimbriated })
    ),
    P.seq(
      aParser.then(constStr('cross')).skip(P.whitespace),
      lineParser.skip(P.whitespace),
      tinctureParserFromName,
      fimbriatedParser
    ).map(([name, line, tincture, fimbriated]): OrdinaryCross => ({ name, tincture, line, fimbriated }))
  );
};

function isNotCross(c: Charge['name']): c is Exclude<Charge['name'], 'cross'> {
  return c !== 'cross';
}

export function chargeParser(): P.Parser<Exclude<Charge, Cross>> {
  const chargeParsers: Array<P.Parser<Exclude<Charge, Cross>>> = charges.filter(isNotCross).map(
    (charge): P.Parser<Exclude<Charge, Cross>> => {
      if (charge === 'lion') {
        return countParser.trim(P.optWhitespace).chain<Lion>((count) => lionParser(count));
      } else if (charge === 'eagle') {
        return countParser.trim(P.optWhitespace).chain<Eagle>((count) => eagleParser(count));
      } else if (charge === 'fleurdelys') {
        return fleurDeLysParser();
      } else if (charge === 'escutcheon') {
        return escutcheonParser();
      } else if (charge === 'roundel') {
        return roundelParser();
      } else if (charge === 'lozenge') {
        return lozengeParser();
      } else if (charge === 'mullet') {
        return mulletParser();
      } else if (charge === 'crown') {
        return countParser.trim(P.optWhitespace).chain<Crown>((count) => crownParser(count));
      } else {
        return cannotHappen(charge);
      }
    }
  );
  return P.alt(...chargeParsers);
}
