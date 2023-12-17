import { getNegativeNumbers } from './getNegativeNumbers';

describe('The getNegativeNumbers function', () => {
  describe('when provided with an array', () => {
    describe('and when provided array is empty', () => {
      it('should return an empty array', () => {
        const result = getNegativeNumbers([]);
        expect(result).toEqual([]);
      });
    });
    describe('and when array contains negative numbers', () => {
      describe('and when array contains only numbers', () => {
        it('should return an array with only negative numbers', () => {
          const result = getNegativeNumbers([1, -5, -3, 12, -152]);
          expect(result).toEqual([-5, -3, -152]);
        });
      });
      describe('and when array contains values that are not numbers', () => {
        it('should return an array with only negative numbers', () => {
          const result = getNegativeNumbers([
            '-12',
            'Hello',
            -6,
            undefined,
            -0.015,
            88,
            NaN,
          ]);
          expect(result).toEqual([-6, -0.015]);
        });
      });
    });
    describe('and when no negative numbers are present in the array', () => {
      describe('and when array contains values that are not numbers', () => {
        it('should return an empty array', () => {
          const result = getNegativeNumbers([
            '-12',
            'Hello',
            undefined,
            0.015,
            88,
            NaN,
          ]);
          expect(result).toEqual([]);
        });
      });
      describe('and when array contains only numbers', () => {
        it('should return an empty array', () => {
          const result = getNegativeNumbers([23, 0.015, 88]);
          expect(result).toEqual([]);
        });
      });
    });
  });
});
