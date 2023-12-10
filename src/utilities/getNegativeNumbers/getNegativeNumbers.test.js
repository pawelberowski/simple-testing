import { getNegativeNumbers } from './getNegativeNumbers';

describe('The getNegativeNumbers function', () => {
  describe('when provided with an array', () => {
    describe('when array contains negative numbers', () => {
      it('should return an array with only negative numbers', () => {
        const result = getNegativeNumbers([1, -5, -3, 12, -152]);
        expect(result).toEqual([-5, -3, -152]);
        const result2 = getNegativeNumbers([
          '-12',
          'Hello',
          -6,
          undefined,
          -0.015,
          88,
          NaN,
        ]);
        expect(result2).toEqual([-6, -0.015]);
      });
    });
    describe('when no negative numbers are present in the array', () => {
      it('should return an empty array', () => {
        const result = getNegativeNumbers([]);
        expect(result).toEqual([]);
        const result2 = getNegativeNumbers([
          '-12',
          'Hello',
          undefined,
          0.015,
          88,
          NaN,
        ]);
        expect(result2).toEqual([]);
      });
    });
  });
});
