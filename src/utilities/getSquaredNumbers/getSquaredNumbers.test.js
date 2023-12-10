import { getSquaredNumbers } from './getSquaredNumbers';

describe('The getSquaredNumbers function', () => {
  describe('when provided with an numbers array', () => {
    it('should return an array of squared numbers', () => {
      const result = getSquaredNumbers([1, 2, 3, 4, 5]);
      expect(result).toEqual([1, 4, 9, 16, 25]);
      const result2 = getSquaredNumbers([6, 7, 8, 9, 10]);
      expect(result2).toEqual([36, 49, 64, 81, 100]);
    });
  });
  describe('when provided with an empty array', () => {
    it('should return empty array', () => {
      const result = getSquaredNumbers([]);
      expect(result).toEqual([]);
    });
  });
  describe('when provided with an array containing not only numbers', () => {
    it('should return array containing squared numbers and NaNs', () => {
      const result = getSquaredNumbers([-200, 'a', '2', 'd', 1]);
      expect(result).toEqual([40000, NaN, 4, NaN, 1]);
    });
  });
});
