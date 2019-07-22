import * as P from 'parsimmon';
import { Blason } from '../model/blason';
import { gules, Tincture, tinctures } from '../model/tincture';
import { parties, Party } from '../model/party';
import { ordinaries, Ordinary } from '../model/ordinary';
import { stringifyNumber, stringifyParty } from '../from-blason/blason.helpers';
import {
  Charge,
  charges,
  Lion,
  LionAttitude,
  lionAttitudes,
  LionHead,
  lionHeads,
  LionTail,
  lionTails,
} from '../model/charge';
import { cannotHappen } from '../../utils/cannot-happen';
import { identity } from '../../utils/identity';
import { BarryField, BendyField, BendySinisterField, ChequyField, Field, PalyField } from '../model/field';
import { capitalizeFirstLetter } from '../../utils/strings';

type Language = {
  Tincture: (r: AppliedLanguage) => P.Parser<Tincture>;
  Party: (r: AppliedLanguage) => P.Parser<Party>;
  Field: (r: AppliedLanguage) => P.Parser<Field>;
  Ordinary: (r: AppliedLanguage) => P.Parser<Ordinary>;
  Blason: (r: AppliedLanguage) => P.Parser<Blason>;
  Charge: (r: AppliedLanguage) => P.Parser<Charge>;
};
type AppliedLanguage = { [K in keyof Language]: ReturnType<Language[K]> };

function buildAltParser<A>(arr: ReadonlyArray<A>, stringifyFn: (a: A) => string): P.Parser<A> {
  return P.alt(
    ...arr
      .map((a) => [a, stringifyFn(a)] as const)
      .sort(([, a1], [, a2]) => a2.length - a1.length)
      .map(([a, aStr]) =>
        P.regex(new RegExp(aStr, 'i'))
          .result(a)
          .desc(aStr)
      )
  );
}

function constStr<S extends string>(str: S, asStr?: string): P.Parser<S> {
  return P.regex(new RegExp(asStr || str, 'i'))
    .result(str)
    .desc(asStr || capitalizeFirstLetter(str));
}

const partyUnit: P.Parser<Party['name']> = buildAltParser(parties, stringifyParty);

const Tincture = (stringifier: (a: Tincture) => string) => buildAltParser(tinctures, stringifier);

const language: Language = {
  Tincture(_r: AppliedLanguage): P.Parser<Tincture> {
    return Tincture((x) => x.name);
  },

  Party(r: AppliedLanguage): P.Parser<Party> {
    return constStr('per')
      .skip(P.whitespace)
      .then(partyUnit)
      .skip(P.whitespace)
      .chain((name) => {
        return P.seq(
          r.Tincture,
          P.regex(/and/i)
            .trim(P.whitespace)
            .then(r.Tincture)
        ).map((tinctures): Party => ({ name, tinctures }));
      });
  },

  Ordinary(r: AppliedLanguage): P.Parser<Ordinary> {
    const ordinaryParser: P.Parser<Ordinary['name']> = buildAltParser(ordinaries, identity);

    return P.seqMap(
      P.regex(/an?/i)
        .then(P.optWhitespace)
        .then(ordinaryParser)
        .skip(P.whitespace),
      r.Tincture,
      (name, tincture): Ordinary => ({ name, tincture })
    );
  },

  Field(r: AppliedLanguage): P.Parser<Field> {
    const barryParser: P.Parser<BarryField> = P.seq(
      constStr('Barry of')
        .skip(P.whitespace)
        .then(buildAltParser([6, 8, 10] as const, stringifyNumber)),
      P.whitespace.then(r.Tincture).skip(P.whitespace),
      P.regex(/and/i)
        .skip(P.whitespace)
        .then(r.Tincture)
    ).map(
      ([number, tincture1, tincture2]): BarryField => ({ kind: 'barry', number, tinctures: [tincture1, tincture2] })
    );
    const palyBendyParser: P.Parser<PalyField | BendyField | BendySinisterField | ChequyField> = P.seq(
      P.alt(constStr('bendySinister', 'Bendy Sinister'), constStr('paly'), constStr('bendy'), constStr('chequy')),
      P.whitespace.then(r.Tincture).skip(P.whitespace),
      P.regex(/and/i)
        .skip(P.whitespace)
        .then(r.Tincture)
    ).map(([kind, tincture1, tincture2]): PalyField | BendyField | BendySinisterField | ChequyField => ({
      kind,
      tinctures: [tincture1, tincture2],
    }));
    return P.alt(
      Tincture((x) => capitalizeFirstLetter(x.name)).map((tincture) => ({
        kind: 'plain',
        tincture,
      })),
      r.Party.map((party) => ({ kind: 'party', per: party })),
      palyBendyParser,
      barryParser
    );
  },

  Charge(r: AppliedLanguage): P.Parser<Charge> {
    const chargesParser = (count: 1 | 2 | 3): P.Parser<Charge> =>
      P.alt(
        ...charges.map((charge) => {
          if (charge === 'lion') {
            const attitudeParser: P.Parser<LionAttitude> = buildAltParser(lionAttitudes, identity);
            const headParser: P.Parser<LionHead> = buildAltParser(lionHeads, identity);
            const tailParser: P.Parser<LionTail> = buildAltParser(lionTails, identity);

            const lionNameParser = count === 1 ? P.regex(/lion/i) : P.regex(/lions/i);
            const lionParser: P.Parser<Lion> = P.seq(
              lionNameParser.skip(P.whitespace).then(attitudeParser),
              P.whitespace.then(headParser).fallback(null),
              P.whitespace
                .then(P.regex(/tail/i))
                .then(P.whitespace)
                .then(tailParser)
                .fallback(null),
              count === 1
                ? P.of({ count })
                : P.whitespace
                    .then(P.regex(/in pale/i).result('pale' as const))
                    .map((disposition) => ({ count, disposition })),
              P.whitespace.then(r.Tincture),
              P.whitespace
                .then(P.regex(/armed and langued/i))
                .then(P.whitespace)
                .then(r.Tincture)
                .fallback(null)
            ).map(([attitude, head, tail, countAndDisposition, tincture, armedAndLangued]) => {
              return {
                name: 'lion',
                attitude,
                tincture,
                armedAndLangued: armedAndLangued || gules,
                tail,
                head,
                countAndDisposition,
              };
            });

            return lionParser;
          } else {
            return cannotHappen(charge);
          }
        })
      );

    return P.alt(
      P.regex(/an?/i).result(1 as const),
      P.regex(/two/i).result(2 as const),
      P.regex(/three/i).result(3 as const)
    )
      .trim(P.optWhitespace)
      .chain((count) => chargesParser(count));
  },

  Blason(r: AppliedLanguage): P.Parser<Blason> {
    return P.seq(
      r.Field,
      P.string(',')
        .trim(P.optWhitespace)
        .chain((_) =>
          P.seq(
            r.Ordinary.map((ordinary) => ({ ordinary }))
              .skip(
                P.string(',')
                  .trim(P.optWhitespace)
                  .or(P.string(''))
              )
              .fallback({}),
            r.Charge.map((charge) => ({ charge })).fallback({})
          ).map(([ordinary, charge]) => ({ ...ordinary, ...charge }))
        )
        .fallback({})
    ).map(([field, rest]) => ({ field, ...rest }));
  },
};

const lexer = P.createLanguage(language);

export function parseBlason(program: string): Blason | { error: string } {
  const result = lexer.Blason.parse(program);
  if (result.status) {
    return result.value;
  } else {
    return { error: P.formatError(program, result) };
  }
}
