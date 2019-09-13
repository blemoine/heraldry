import fc from 'fast-check';
import { chargeArb } from '../model/tests/arbitraries';
import { SimpleBlason } from '../model/blason';
import { azure, or } from '../model/tincture';
import { cleanup, render } from '@testing-library/react';
import * as React from 'react';
import { Dimension } from '../model/dimension';
import { CoatsOfArmsDisplay } from './CoatsOfArmsDisplay';
import { Configuration } from '../model/configuration';
import { defaultTinctureConfiguration } from '../model/tincture-configuration';
import * as pointInSvgPolygon from 'point-in-svg-polygon';
import { stringifyBlason } from './blason.helpers';
import { identity3, Matrix3, mul, mulVec, scale3, translation3 } from '../svg-path-builder/matrix';

describe('CoatsOfArms rules', () => {
  const dimension: Dimension = { width: 360, height: 480 };
  const configuration: Configuration = { shieldShape: 'heater', tinctureConfiguration: defaultTinctureConfiguration };

  it.skip('should ensure that charges are always inside a plain field', () => {
    fc.assert(
      fc.property(chargeArb, fc.context(), (charge, ctx) => {
        const blason: SimpleBlason = {
          kind: 'simple',
          field: { kind: 'plain', tincture: azure },
          charge,
        };

        cleanup();
        render(<CoatsOfArmsDisplay blason={blason} dimension={dimension} configuration={configuration} />);

        const clipPathStr = document.querySelector('#plain-field-clip-path path')!.getAttribute('d');
        const clipPath = pointInSvgPolygon.segments(clipPathStr);

        const chargesParsedPoints = getChargePoints();

        chargesParsedPoints.forEach((point) => {
          const isInside = pointInSvgPolygon.isInside(point, clipPath);
          if (!isInside) {
            ctx.log(`Blason '${stringifyBlason(blason)}' returns false for point ${point}`);
          }
          expect(isInside).toBe(true);
        });
      }),
      { numRuns: 50 }
    );
  });

  it('should ensure that charges are always inside the field under a chief', () => {
    fc.assert(
      fc.property(chargeArb, fc.context(), (charge, ctx) => {
        const blason: SimpleBlason = {
          kind: 'simple',
          field: { kind: 'plain', tincture: azure },
          ordinary: { name: 'chief', line: 'straight', tincture: or },
          charge,
        };

        cleanup();
        render(<CoatsOfArmsDisplay blason={blason} dimension={dimension} configuration={configuration} />);

        const clipPathStr = document.querySelector('#plain-field-clip-path path')!.getAttribute('d');
        const clipPath = pointInSvgPolygon.segments(clipPathStr);

        const chiefPathStr = document.querySelector('.blason-ordinary path')!.getAttribute('d');
        const chiefPath: Array<any> = pointInSvgPolygon.segments(chiefPathStr);
        const minY: number = chiefPath
          .flatMap(({ coords }) => coords)
          .reduce(([accX, accY], [x, y]) => {
            if (accY > y) {
              return [accX, accY];
            } else {
              return [x, y];
            }
          })[1];

        const chargesParsedPoints = getChargePoints();

        chargesParsedPoints.forEach((point) => {
          try {
            expect(pointInSvgPolygon.isInside(point, clipPath)).toBe(true);
            expect(minY).toBeLessThanOrEqual(point[1]);
          } catch (e) {
            ctx.log(`Blason '${stringifyBlason(blason)}' returns false for point ${point}, with minY ${minY}`);
            throw e;
          }
        });
      }),
      { numRuns: 50 }
    );
  });
});

function parentsUntil(el: Node, selector: string): Array<Element> {
  const parent = el.parentElement;
  if (parent && !parent.matches(selector)) {
    return [parent, ...parentsUntil(parent, selector)];
  } else {
    return [];
  }
}

function getChargePoints(): Array<[number, number]> {
  const chargePath = Array.from(document.querySelectorAll<SVGPathElement>('.blason-charge path'));

  return chargePath.flatMap((path) => {
    const points: Array<[number, number]> = pointInSvgPolygon
      .segments(path.getAttribute('d'))
      .flatMap(({ coords }: any) => {
        return [coords[0], coords[coords.length - 1]];
      });
    const parents = parentsUntil(path, '.coats-of-arms-display');

    const transformMatrix: Matrix3 = parents.reduce((accMat, el) => {
      if (el.tagName === 'g') {
        const transform = el.getAttribute('transform');
        const coordinate = transform
          ? transform.match(/^translate\(\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\)$/)
          : null;
        if (transform && !coordinate) {
          throw new Error(`transform ${transform} is unsupported`);
        }

        const translateX = coordinate ? parseFloat(coordinate[1]) : 0;
        const translateY = coordinate ? parseFloat(coordinate[2]) : 0;
        if (!coordinate) {
          return accMat;
        }
        return mul(translation3(translateX, translateY), accMat);
      } else if (el.tagName === 'svg') {
        const widthStr = el.getAttribute('width');
        const heightStr = el.getAttribute('height');
        const viewBox = el.getAttribute('viewBox');
        const viewBoxMatches = viewBox
          ? viewBox.match(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/)
          : null;

        const scaleX = widthStr && viewBoxMatches ? parseFloat(widthStr) / parseFloat(viewBoxMatches[3]) : 1;
        const scaleY = heightStr && viewBoxMatches ? parseFloat(heightStr) / parseFloat(viewBoxMatches[4]) : 1;
        return mul(scale3(scaleX, scaleY), accMat);
      } else {
        return accMat;
      }
    }, identity3());
    return points.map((p) => {
      const r = mulVec(transformMatrix, [p[0], p[1], 1]);

      return [r[0], r[1]];
    });
  });
}
