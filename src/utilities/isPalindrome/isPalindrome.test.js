import { isPalindrome } from './isPalindrome';

describe('The isPalindrome function', () => {
  describe('when provided with palindrome', () => {
    it('should return true', () => {
      const result = isPalindrome('Kayak');
      expect(result).toBe(true);
      const result2 = isPalindrome('Was it a cat I saw');
      expect(result2).toBe(true);
    });
  });
  describe('when provided with a non-palindrome', () => {
    it('should return false', () => {
      const result = isPalindrome('Hello!');
      expect(result).toBe(false);
      const result2 = isPalindrome('Was it a cat or dog?');
      expect(result2).toBe(false);
    });
  });
});
