import { isTextUppercase } from './isTextUppercase';

describe('The isTextUppercase function', () => {
  describe('when all letters in text are uppercase', () => {
    it('should return true', () => {
      const result = isTextUppercase('GOOD');
      expect(result).toBe(true);
    });
  });
  describe('when all letters are lowercase', () => {
    it('should return false', () => {
      const result = isTextUppercase('bad');
      expect(result).toBe(false);
    });
  });
  describe('when some letters in text are uppercase and others are lowercase', () => {
    it('should return false', () => {
      const result = isTextUppercase('ALSO bad');
      expect(result).toBe(false);
    });
  });
  describe('when the text is empty', () => {
    it('should return false', () => {
      const result = isTextUppercase('');
      expect(result).toBe(false);
    });
  });
});
