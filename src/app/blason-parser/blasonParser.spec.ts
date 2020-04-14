import { parseBlason } from './blasonParser';
import {
  argent,
  azure,
  counterErmine,
  counterVair,
  ermine,
  gules,
  or,
  potent,
  potentEnPoint,
  purpure,
  sable,
  vair,
  vairEnPale,
  vairEnPoint,
  vert,
} from '../model/tincture';
import { Blason, QuarterlyBlason, SimpleBlason } from '../model/blason';
import { Cross } from '~/plugins/charges/cross/cross';
import { Escutcheon } from '~/plugins/charges/escutcheon/escutcheon';
import { FleurDeLys } from '~/plugins/charges/fleurdelys/fleurdelys';
import { Lion } from '~/plugins/charges/lion/lion';
import { Lozenge } from '~/plugins/charges/lozenge/lozenge';
import { Mullet } from '~/plugins/charges/mullet/mullet';
import { Roundel } from '~/plugins/charges/roundel/roundel';

describe('parseBlason', () => {
  it('should parse a plain blason', () => {
    const result = parseBlason('Gules');

    const expected: Blason = { kind: 'simple', field: { kind: 'plain', tincture: gules } };
    expect(result).toEqual(expected);
  });
  it('should parse a plain blason ignoring the whitespaces', () => {
    const result = parseBlason(` 
     Argent   
      `);

    const expected: Blason = { kind: 'simple', field: { kind: 'plain', tincture: argent } };
    expect(result).toEqual(expected);
  });
  it('should parse a fur blason', () => {
    const result = parseBlason('Ermine');

    const expected: Blason = { kind: 'simple', field: { kind: 'plain', tincture: ermine } };
    expect(result).toEqual(expected);
  });
  it('should parse a party division', () => {
    const result = parseBlason('Per pale vair and azure');

    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pale', tinctures: [vair, azure], line: 'straight' } },
    };
    expect(result).toEqual(expected);
  });
  it('should parse a party division by bend sinister', () => {
    const result = parseBlason('Per bend sinister ermine and vert');

    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'bendSinister', tinctures: [ermine, vert], line: 'straight' } },
    };
    expect(result).toEqual(expected);
  });
  it('should parse a blason with an ordinary', () => {
    const result = parseBlason('Or, a chief argent');

    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'chief', tincture: argent, line: 'straight', fimbriated: null, charge: null },
    };
    expect(result).toEqual(expected);
  });

  it('should parse a simple lion correctly', () => {
    const result = parseBlason('Gules, a lion rampant sable armed and langued azure');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: gules },
      charge: new Lion({
        countAndDisposition: { count: 1, disposition: 'default' },
        attitude: 'rampant',
        head: null,
        tail: null,
        tincture: sable,
        armedAndLangued: azure,
      }),
    };

    expect(result).toEqual(expected);
  });

  it('should parse correctly the England Royal Arms', () => {
    const result = parseBlason('Gules, three lions passant guardant in pale or armed and langued azure');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: gules },
      charge: new Lion({
        tincture: or,
        armedAndLangued: azure,
        attitude: 'passant',
        tail: null,
        head: 'guardant',
        countAndDisposition: { count: 3, disposition: 'pale' },
      }),
    };

    expect(result).toEqual(expected);
  });

  it('should parse correctly a bendy field', () => {
    const result = parseBlason('Bendy argent and sable');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'bendy', tinctures: [argent, sable], number: 6, line: 'straight' },
    };

    expect(result).toEqual(expected);
  });

  it('should parse correctly a barry field', () => {
    const result = parseBlason('Barry argent and sable');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'barry', tinctures: [argent, sable], number: 6, line: 'straight' },
    };

    expect(result).toEqual(expected);
  });

  it('should return error in human readable way', () => {
    const result = parseBlason('Bandy argent and sable');

    expect(result).toEqual({
      error: `
-- PARSING FAILED --------------------------------------------------

> 1 | Bandy argent and sable
    | ^

Expected one of the following: 

Argent, Azure, Barry, Barry and per chevron throughout, Barry and per pale, Barry pily, Bendy, Bendy Sinister, Bendy and per bend sinister, Bendy and per pale, Bendy pily, Bendy pily sinister, Bendy sinister and per bend, Chequy, Chevronny, Chevronny reversed, Counter ermine, Counter potent, Counter vair, Counter-ermine, Counter-potent, Counter-vair, Embrassee a dexter, Embrassee a sinister, Ermine, Erminois, Gironny, Gironny arrondi, Gules, Lozenge throughout, Lozenge throughout arched, Lozengy, Lozengy bendwise, Murrey, Or, Paly, Paly pily, Pean, Per, Potent, Potent en pale, Potent en point, Potent-en-pale, Potent-en-point, Purpure, Quarterly, Quarterly of nine, Sable, Sanguine, Tenne, Tenné, Tierced per, Vair, Vair en pale, Vair en point, Vair-en-pale, Vair-en-point, Vert
`,
    });
  });

  it('should parse the blason of Greece', () => {
    const result = parseBlason('Azure, a cross Argent ');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: azure },
      ordinary: { name: 'cross', tincture: argent, line: 'straight', fimbriated: null },
    };

    expect(result).toEqual(expected);
  });

  it('should parse the blason of Battenberg', () => {
    const result = parseBlason('Argent, two pallets Sable ');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      ordinary: { name: 'pale', tincture: sable, count: 2, line: 'straight', fimbriated: null },
    };

    expect(result).toEqual(expected);
  });

  it('should parse bars', () => {
    const result = parseBlason('Argent, two bars Sable ');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      ordinary: { name: 'fess', tincture: sable, count: 2, line: 'straight', fimbriated: null },
    };

    expect(result).toEqual(expected);
  });

  it('should parse the arms of Gwent', () => {
    const result = parseBlason('Per pale Azure and Sable, three Fleurs-de-Lis Or');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pale', tinctures: [azure, sable], line: 'straight' } },
      charge: new FleurDeLys({ countAndDisposition: { count: 3, disposition: 'default' }, tincture: or }),
    };

    expect(result).toEqual(expected);
  });

  it('should parse the arms of Dinefwr modified', () => {
    const result = parseBlason('Gules, a Lion rampant Or, a bordure engrailed azure');

    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: gules },
      charge: new Lion({
        attitude: 'rampant',
        tincture: or,
        head: null,
        tail: null,
        armedAndLangued: gules,
        countAndDisposition: { count: 1, disposition: 'default' },
      }),
      ordinary: {
        line: 'engrailed',
        name: 'bordure',
        tincture: azure,
        fimbriated: null,
      },
    };

    expect(result).toEqual(expected);
  });

  it('should accept a lion without explicit attitude', () => {
    const result = parseBlason('Or, a lion Gules armed and langued Azure');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      charge: new Lion({
        attitude: 'rampant',
        tincture: gules,
        head: null,
        tail: null,
        armedAndLangued: azure,
        countAndDisposition: { count: 1, disposition: 'default' },
      }),
    };
    expect(result).toEqual(expected);
  });

  it('should parse a chief engrailed', () => {
    const result = parseBlason('Azure, a chief engrailed or');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: azure },
      ordinary: { name: 'chief', line: 'engrailed', tincture: or, fimbriated: null, charge: null },
    };
    expect(result).toEqual(expected);
  });

  it('should parse a base invected', () => {
    const result = parseBlason('Azure, a base invected ermine');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: azure },
      ordinary: { name: 'base', line: 'invected', tincture: ermine, fimbriated: null },
    };
    expect(result).toEqual(expected);
  });

  it('should parse a base straight', () => {
    const result = parseBlason('Or, a base vair');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'base', line: 'straight', tincture: vair, fimbriated: null },
    };
    expect(result).toEqual(expected);
  });

  it('should parse a bend sinister engrailed', () => {
    const result = parseBlason('Or, a bend sinister engrailed gules');
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'bendSinister', line: 'engrailed', tincture: gules, fimbriated: null },
    };
    expect(result).toEqual(expected);
  });

  it('should parse 18 roundels', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      charge: new Roundel({
        tincture: argent,
        countAndDisposition: { count: 18, disposition: 'default' },
        inside: 'nothing',
      }),
    };
    expect(parseBlason('Argent, eighteen roundels argent')).toEqual(expected);
  });

  it('should parse 17 annulets', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: azure },
      charge: new Roundel({
        tincture: sable,
        countAndDisposition: { count: 17, disposition: 'default' },
        inside: 'voided',
      }),
    };
    expect(parseBlason('Azure, seventeen annulets sable')).toEqual(expected);
  });

  it('should parse fleurs de lys in pale', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: azure },
      charge: new FleurDeLys({ tincture: or, countAndDisposition: { count: 12, disposition: 'pale' } }),
    };
    expect(parseBlason('Azure, twelve fleur de lys in pale or')).toEqual(expected);
  });

  it('should parse Paly argent and gules, a chief engrailed sable, four lozenges in fess azure', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'paly', tinctures: [argent, gules] },
      ordinary: { name: 'chief', line: 'engrailed', tincture: sable, fimbriated: null, charge: null },
      charge: new Lozenge({
        tincture: azure,
        countAndDisposition: { count: 4, disposition: 'fess' },
        inside: 'nothing',
      }),
    };
    expect(parseBlason('Paly argent and gules, a chief engrailed sable, four lozenges in fess azure')).toEqual(
      expected
    );
  });

  it('should parse  Potent,  a chief gules', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: potent },
      ordinary: { name: 'chief', line: 'straight', tincture: gules, fimbriated: null, charge: null },
    };
    expect(parseBlason('Potent,  a chief gules')).toEqual(expected);
  });

  it('should parse  Paly pily', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'paly-pily', tinctures: [gules, azure] } };
    expect(parseBlason('Paly pily gules and azure')).toEqual(expected);
  });

  it('should parse Bendy pily', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'bendy-pily', tinctures: [gules, azure] } };
    expect(parseBlason('Bendy pily gules and azure')).toEqual(expected);
  });

  it('should parse Bendy pily sinister', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'bendy-pily-sinister', tinctures: [or, azure] } };
    expect(parseBlason('Bendy pily sinister or and azure')).toEqual(expected);
  });

  it('should parse  Counter ermine and vair en point', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'chequy', tinctures: [counterErmine, vairEnPoint] } };
    expect(parseBlason('Chequy counter ermine and vair en point')).toEqual(expected);
  });

  it('should parse  Per pale potent-en-point and Vair-en-point', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pale', tinctures: [potentEnPoint, vairEnPoint], line: 'straight' } },
    };
    expect(parseBlason('Per pale potent-en-point and Vair-en-point')).toEqual(expected);
  });

  it('should parse gironny', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'gironny', tinctures: [or, gules], number: 8 } };
    expect(parseBlason('Gironny or and gules')).toEqual(expected);
  });
  it('should parse gyronny', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'gironny', tinctures: [argent, azure], number: 8 } };
    expect(parseBlason('Gyronny argent and azure')).toEqual(expected);
  });
  it('should parse gyronny arrondi', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'gironny-arrondi', tinctures: [argent, azure], number: 8 },
    };
    expect(parseBlason('Gyronny arrondi argent and azure')).toEqual(expected);
  });
  it('should parse gyronny arrondy', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'gironny-arrondi', tinctures: [or, azure], number: 10 } };
    expect(parseBlason('Gyronny arrondy of ten or and azure')).toEqual(expected);
  });
  it('should parse gironny of 12', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'gironny', tinctures: [or, gules], number: 12 } };
    expect(parseBlason('Gironny of twelve or and gules')).toEqual(expected);
  });

  it('should parse  Cross charge', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: gules },
      charge: new Cross({
        limbs: 'hummetty',
        tincture: or,
        countAndDisposition: { count: 3, disposition: 'pale' },
      }),
    };
    expect(parseBlason('Gules, three crosses hummetty in pale or ')).toEqual(expected);
  });

  it('should parse cross potent', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: gules },
      charge: new Cross({
        limbs: 'potent',
        tincture: argent,
        countAndDisposition: { count: 1, disposition: 'default' },
      }),
    };
    expect(parseBlason('Gules, a cross potent argent')).toEqual(expected);
  });

  it('should support checky', () => {
    const expected: Blason = { kind: 'simple', field: { kind: 'chequy', tinctures: [counterVair, vairEnPale] } };
    expect(parseBlason('Checky counter vair and vair en pale')).toEqual(expected);
  });
  it('should support party per', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'bend', tinctures: [gules, vert], line: 'straight' } },
    };
    expect(parseBlason('Party per bend gules and vert')).toEqual(expected);
  });
  it('should support gardant', () => {
    const expected: Blason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: gules },
      charge: new Lion({
        attitude: 'passant',
        tincture: or,
        head: 'guardant',
        tail: null,
        armedAndLangued: gules,
        countAndDisposition: { count: 1, disposition: 'default' },
      }),
    };
    expect(parseBlason('Gules, a lion passant gardant or')).toEqual(expected);
  });

  it('should support quartering', () => {
    const expected: QuarterlyBlason = {
      kind: 'quarterly',
      blasons: [
        { kind: 'simple', field: { kind: 'plain', tincture: gules } },
        { kind: 'simple', field: { kind: 'plain', tincture: azure } },
        { kind: 'simple', field: { kind: 'plain', tincture: vert } },
        { kind: 'simple', field: { kind: 'plain', tincture: ermine } },
      ],
    };

    expect(parseBlason('Quarterly, 1st: gules; 2nd: azure; 3rd: vert; 4th: ermine')).toEqual(expected);
  });

  it('should support without :', () => {
    const expected: QuarterlyBlason = {
      kind: 'quarterly',
      blasons: [
        { kind: 'simple', field: { kind: 'plain', tincture: gules } },
        { kind: 'simple', field: { kind: 'plain', tincture: azure } },
        { kind: 'simple', field: { kind: 'plain', tincture: vert } },
        { kind: 'simple', field: { kind: 'plain', tincture: ermine } },
      ],
    };

    expect(parseBlason('Quarterly, 1st: gules; 2nd azure; third vert; fourth: ermine')).toEqual(expected);
  });

  it('should support without numeral in quaterly', () => {
    const expected: QuarterlyBlason = {
      kind: 'quarterly',
      blasons: [
        { kind: 'simple', field: { kind: 'plain', tincture: gules } },
        { kind: 'simple', field: { kind: 'plain', tincture: azure } },
        { kind: 'simple', field: { kind: 'plain', tincture: vert } },
        { kind: 'simple', field: { kind: 'plain', tincture: ermine } },
      ],
    };

    expect(parseBlason('Quarterly, 1: gules; 2 azure; 3 vert; 4: ermine')).toEqual(expected);
  });

  it('should parse a bendy of ten field', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'bendy', number: 10, tinctures: [or, gules], line: 'straight' },
    };

    expect(parseBlason('Bendy of ten or and gules')).toEqual(expected);
  });
  it('should parse a bendy sinister of ten field', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'bendySinister', number: 10, tinctures: [or, gules], line: 'straight' },
    };

    expect(parseBlason('Bendy sinister of ten or and gules')).toEqual(expected);
  });

  it('should support the arms of Correze', () => {
    const expected: QuarterlyBlason = {
      kind: 'quarterly',
      blasons: [
        {
          kind: 'simple',
          field: { kind: 'plain', tincture: or },
          charge: new Lion({
            attitude: 'passant',
            tincture: gules,
            armedAndLangued: gules,
            countAndDisposition: { count: 2, disposition: 'default' },
            head: null,
            tail: null,
          }),
        },
        { kind: 'simple', field: { kind: 'chequy', tinctures: [or, gules] } },
        { kind: 'simple', field: { kind: 'bendy', number: 10, tinctures: [or, gules], line: 'straight' } },
        {
          kind: 'simple',
          field: { kind: 'plain', tincture: or },
          charge: new Lion({
            attitude: 'rampant',
            tincture: azure,
            armedAndLangued: gules,
            countAndDisposition: { count: 3, disposition: 'default' },
            head: null,
            tail: null,
          }),
        },
      ],
    };

    expect(
      parseBlason(
        'Quarterly, first or, two lions passant gules; second chequy or and gules; third bendy of ten or and gules; fourth or, three lions azure armed and langued gules'
      )
    ).toEqual(expected);
  });

  it('should support quarterly with referencing multiple numbers at the same time', () => {
    const expected: QuarterlyBlason = {
      kind: 'quarterly',
      blasons: [
        { kind: 'simple', field: { kind: 'plain', tincture: or } },
        { kind: 'simple', field: { kind: 'plain', tincture: azure } },
        { kind: 'simple', field: { kind: 'plain', tincture: azure } },
        { kind: 'simple', field: { kind: 'plain', tincture: or } },
      ],
    };

    expect(parseBlason('Quarterly, first and fourth or; second and third: azure')).toEqual(expected);
  });

  it('should return an error if quarterly is missing a quarter', () => {
    const error = parseBlason('Quarterly, first and fourth or; second: azure');
    if ('error' in error) {
      expect(error.error).toMatch('Cannot find third blason');
    } else {
      fail(`${error} should be a failure`);
    }
  });

  it('should parse a simple mullet', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      charge: new Mullet({
        points: 5,
        countAndDisposition: { count: 1, disposition: 'default' },
        tincture: argent,
        inside: 'nothing',
      }),
    };

    expect(parseBlason('Or, a mullet argent ')).toEqual(expected);
  });

  it('should parse a mullet with points', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      charge: new Mullet({
        points: 8,
        countAndDisposition: { count: 2, disposition: 'pale' },
        tincture: gules,
        inside: 'nothing',
      }),
    };

    expect(parseBlason('Or, two mullets of eight points in pale gules ')).toEqual(expected);
  });
  it('should parse a mullet pierced', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      charge: new Mullet({
        points: 5,
        countAndDisposition: { count: 1, disposition: 'default' },
        tincture: gules,
        inside: 'pierced',
      }),
    };

    expect(parseBlason('Or, a mullet pierced gules ')).toEqual(expected);
  });
  it('should parse a mullet pierced with points', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      charge: new Mullet({
        points: 6,
        countAndDisposition: { count: 3, disposition: 'default' },
        tincture: gules,
        inside: 'pierced',
      }),
    };

    expect(parseBlason('Or, three mullets of six points pierced gules ')).toEqual(expected);
  });

  it('should parse wavy line', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'bendSinister', line: 'wavy', tinctures: [azure, or] } },
      ordinary: {
        name: 'chief',
        line: 'wavy',
        tincture: argent,
        fimbriated: null,
        charge: null,
      },
    };

    expect(parseBlason('Per bend sinister wavy azure and or, a chief wavy argent')).toEqual(expected);
  });

  it('should parse embattled line', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'bend', line: 'embattled', tinctures: [azure, or] } },
    };

    expect(parseBlason('Party per bend embattled azure and or')).toEqual(expected);
  });

  it('should parse embattled counter-embattled line', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'bend', line: 'embattled-counter-embattled', tinctures: [azure, or] } },
    };

    expect(parseBlason('Party per bend embattled counter-embattled azure and or')).toEqual(expected);
  });

  it('should parse party per pall', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pall', line: 'straight', tinctures: [azure, or, ermine] } },
    };

    expect(parseBlason('Party per pall azure, or and ermine')).toEqual(expected);
  });

  it('should parse a quarterly of nine', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'quarterly-of-nine', tinctures: [azure, or] },
    };

    expect(parseBlason('Quarterly of nine azure and or')).toEqual(expected);
  });

  it('should parse a lozengy bendwise', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'lozengy-bendwise', tinctures: [azure, or] },
    };

    expect(parseBlason('Lozengy bendwise azure and or')).toEqual(expected);
  });

  it('should parse a tierced per pale', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'tierced', per: { name: 'pale', tinctures: [azure, or, gules], line: 'straight' } },
    };

    expect(parseBlason('Tierced per pale azure, or and gules')).toEqual(expected);
  });

  it('should parse a tierced per fess', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'tierced', per: { name: 'fess', tinctures: [azure, or, gules], line: 'straight' } },
    };

    expect(parseBlason('Tierced per fess azure, or and gules')).toEqual(expected);
  });

  it('should parse a tierced per pale with line style', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'tierced', per: { name: 'fess', tinctures: [azure, or, gules], line: 'invected' } },
    };

    expect(parseBlason('Tierced per fess invected azure, or and gules')).toEqual(expected);
  });

  it('should parse a embrassee a dexter', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'embrassee-a-dexter', tinctures: [azure, or] },
    };

    expect(parseBlason('Embrassee a dexter azure and or')).toEqual(expected);
  });
  it('should parse a embrassee a sinister', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'embrassee-a-sinister', tinctures: [azure, or] },
    };

    expect(parseBlason('Embrassee a sinister azure and or')).toEqual(expected);
  });
  it('should parse a chevron reversed', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'chevron-reversed', tinctures: [azure, or], line: 'straight' } },
    };

    expect(parseBlason('Per chevron reversed azure and or')).toEqual(expected);
  });

  it('should parse a lozenge throughout', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'lozenge-throughout', tinctures: [azure, or] },
    };

    expect(parseBlason('Lozenge throughout azure and or')).toEqual(expected);
  });

  it('should parse a lozenge throughout arched', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'lozenge-throughout-arched', tinctures: [azure, or] },
    };

    expect(parseBlason('Lozenge throughout arched azure and or')).toEqual(expected);
  });
  it('should parse a chevronny reversed', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'chevronny-reversed', tinctures: [azure, or] },
    };

    expect(parseBlason('Chevronny reversed azure and or')).toEqual(expected);
  });
  it('should parse a per pile arched', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pile-arched', tinctures: [azure, or], line: 'straight' } },
    };

    expect(parseBlason('Per pile arched azure and or')).toEqual(expected);
  });
  it('should parse a per pile reversed', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pile-reversed', tinctures: [azure, or], line: 'straight' } },
    };

    expect(parseBlason('Per pile reversed azure and or')).toEqual(expected);
  });
  it('should parse a per pile reversed arched', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pile-reversed-arched', tinctures: [azure, or], line: 'straight' } },
    };

    expect(parseBlason('Per pile reversed arched azure and or')).toEqual(expected);
  });
  it('should parse a per pile bendwise', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'party', per: { name: 'pile-bendwise', tinctures: [azure, or], line: 'straight' } },
    };

    expect(parseBlason('Per pile bendwise azure and or')).toEqual(expected);
  });
  it('should parse a cross potenty', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: azure },
      ordinary: { name: 'cross', line: 'potenty', tincture: argent, fimbriated: null },
    };

    expect(parseBlason('Azure, a cross potenty argent')).toEqual(expected);
  });

  it('should parse Argent, three escutcheons gules', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      charge: new Escutcheon({
        countAndDisposition: { disposition: 'default', count: 3 },
        tincture: gules,
      }),
    };

    expect(parseBlason(' Argent, three escutcheons gules')).toEqual(expected);
  });

  it('should parse chapé ployé per pale', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      ordinary: {
        name: 'chape-ploye',
        tinctures: { kind: 'party', per: 'pale', tinctures: [gules, sable] },
        line: 'straight',
        fimbriated: null,
      },
    };

    expect(parseBlason('Argent, chapé ployé per pale gules and sable')).toEqual(expected);
  });

  it('should parse chapé ployé per pale', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      ordinary: {
        name: 'chape-ploye',
        tinctures: { kind: 'simple', tincture: sable },
        line: 'straight',
        fimbriated: null,
      },
    };

    expect(parseBlason('Argent, chapé ployé sable')).toEqual(expected);
  });

  it('should parse pall inverted', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      ordinary: {
        name: 'pall-inverted',
        tincture: gules,
        line: 'straight',
        fimbriated: null,
      },
    };

    expect(parseBlason('Argent, a pall inverted gules')).toEqual(expected);
  });

  it('should parse gyron', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: argent },
      ordinary: {
        name: 'gyron',
        tincture: gules,
        line: 'straight',
        fimbriated: null,
      },
    };

    expect(parseBlason('Argent, a gyron gules')).toEqual(expected);
  });

  it('should parse barry and per pale', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'barry-and-per-pale', tinctures: [sable, argent] },
    };

    expect(parseBlason('Barry and per pale sable and argent')).toEqual(expected);
  });

  it('should parse barry wavy', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'barry', tinctures: [sable, argent], number: 6, line: 'wavy' },
    };

    expect(parseBlason('Barry wavy sable and argent')).toEqual(expected);
  });
  it('should parse barry of ten wavy', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'barry', tinctures: [azure, gules], number: 10, line: 'wavy' },
    };

    expect(parseBlason('Barry of ten wavy azure and gules')).toEqual(expected);
  });
  it('should parse chaussé', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'chausse', tincture: gules, line: 'straight', fimbriated: null },
    };

    expect(parseBlason('Or, chaussé gules')).toEqual(expected);
  });
  it('should parse chaussé ployé', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: {
        name: 'chausse-ploye',
        tinctures: { kind: 'simple', tincture: gules },
        line: 'straight',
        fimbriated: null,
      },
    };

    expect(parseBlason('Or, chaussé ployé gules')).toEqual(expected);
  });

  it('should parse chaussé ployé per pale', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: {
        name: 'chausse-ploye',
        tinctures: { kind: 'party', per: 'pale', tinctures: [gules, azure] },
        line: 'straight',
        fimbriated: null,
      },
    };

    expect(parseBlason('Or, chaussé ployé per pale gules and azure')).toEqual(expected);
  });
  it('should parse barry and per chevron throughout', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'barry-and-per-chevron-throughout', tinctures: [or, gules] },
    };

    expect(parseBlason('Barry and per chevron throughout or and gules')).toEqual(expected);
  });

  it('should parse a bend fimbriated', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'bend', line: 'straight', fimbriated: azure, tincture: argent },
    };

    expect(parseBlason('Or, a bend argent fimbriated azure')).toEqual(expected);
  });

  it('should parse a bend fimbriated with a line', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'bend', line: 'invected', fimbriated: purpure, tincture: gules },
    };

    expect(parseBlason('Or, a bend invected gules fimbriated purpure')).toEqual(expected);
  });
  it('should parse ermined', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: { name: 'ermined', field: or, spot: gules } },
    };

    expect(parseBlason('Or ermined gules')).toEqual(expected);
  });

  it('should parse orle', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'orle', line: 'straight', tincture: azure, fimbriated: null },
    };

    expect(parseBlason('Or, an orle azure')).toEqual(expected);
  });

  it('should parse flaunches', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: { name: 'flaunches', line: 'straight', tincture: azure, fimbriated: null },
    };

    expect(parseBlason('Or, flaunches azure')).toEqual(expected);
  });

  it('should parse on a chief', () => {
    const expected: SimpleBlason = {
      kind: 'simple',
      field: { kind: 'plain', tincture: or },
      ordinary: {
        name: 'chief',
        line: 'straight',
        tincture: azure,
        fimbriated: null,
        charge: new Mullet({
          tincture: or,
          countAndDisposition: {
            count: 2,
            disposition: 'default',
          },
          inside: 'nothing',
          points: 5,
        }),
      },
    };

    expect(parseBlason('Or, on a chief azure two mullets or')).toEqual(expected);
  });
});
