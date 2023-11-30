import { divide } from './divide';

describe('The divide function', () => {
  describe('when the numbers do not equal zero', () => {
    it('should return a valid result', () => {
      const result = divide(10, 5);
      expect(result).toBe(2);
    });
  });
});
