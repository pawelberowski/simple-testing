import { isEven } from './isEven';

describe('The isEven function', () => {
  describe('when provided with an even number', () => {
    it('should return true', () => {
      const result = isEven(-2);
      expect(result).toBe(true);
    });
  });
  describe('when provided with an odd number', () => {
    it('should return false', () => {
      const result = isEven(33);
      expect(result).toBe(false);
    });
  });
  describe('when provided with a string', () => {
    describe('when the string represents an even number', () => {
      it('should return true', () => {
        const result = isEven('666');
        expect(result).toBe(true);
      });
    });
    describe('when the string is empty', () => {
      it('should return true', () => {
        const result = isEven('');
        expect(result).toBe(true);
      });
    });
    describe('when the string represents an odd number', () => {
      it('should return false', () => {
        const result = isEven('-69');
        expect(result).toBe(false);
      });
    });
    describe('when the string does not represent a number in a direct way', () => {
      it('should return false', () => {
        const result = isEven('2+2');
        expect(result).toBe(false);
      });
    });
  });
  describe('when provided with null', () => {
    it('should return false', () => {
      const result = isEven(null);
      expect(result).toBe(false);
    });
  });
  describe('when provided with undefined', () => {
    it('should return false', () => {
      const result = isEven(undefined);
      expect(result).toBe(false);
    });
  });
  describe('when provided with an array', () => {
    it('should return false', () => {
      const result = isEven();
      expect(result).toBe(false);
    });
  });
});
