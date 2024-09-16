import { getSmallestNumber } from './getSmallestNumber';

describe('The getSmallestNumber function', () => {
  describe('when provided with an array of numbers', () => {
    it('should return the smallest number', () => {
      const result = getSmallestNumber([2, -5, 10, 1, 4]);
      expect(result).toBe(-5);
    });
  });
  describe('when provided with an empty array', () => {
    it('should return infinity', () => {
      const result = getSmallestNumber([]);
      expect(result).toBe(Infinity);
    });
  });
  describe('when provided with an array containing elements that are not exclusively numbers', () => {
    it('should return NaN', () => {
      const result = getSmallestNumber([-200, 'a', '2', 'd', 1]);
      expect(result).toBe(NaN);
    });
  });
});
