import { getSquaredNumbers } from './getSquaredNumbers';

describe('The getSquaredNumbers function', () => {
  describe('when provided with an array of numbers', () => {
    it('should return an array of squared numbers', () => {
      const result = getSquaredNumbers([1, 2, 3, 4, 5]);
      expect(result).toEqual([1, 4, 9, 16, 25]);
    });
  });
  describe('when provided with an empty array', () => {
    it('should return an empty array', () => {
      const result = getSquaredNumbers([]);
      expect(result).toEqual([]);
    });
  });
  describe('when provided with an array containing elements that are not exclusively numbers', () => {
    it('should return array containing squared numbers and NaNs', () => {
      const result = getSquaredNumbers([-200, 'a', '2', 'd', 1]);
      expect(result).toEqual([40000, NaN, 4, NaN, 1]);
    });
  });
});
