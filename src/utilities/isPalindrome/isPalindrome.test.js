import { isPalindrome } from './isPalindrome';

describe('The isPalindrome function', () => {
  describe('when provided with a palindrome', () => {
    describe('and when provided with a single word', () => {
      it('should return true', () => {
        const result = isPalindrome('Kayak');
        expect(result).toBe(true);
      });
    });
    describe('and when provided with a sentence', () => {
      it('should return true', () => {
        const result = isPalindrome('Was it a cat I saw');
        expect(result).toBe(true);
      });
    });
  });
  describe('when provided with a non-palindrome', () => {
    describe('and when provided with a single word', () => {
      it('should return false', () => {
        const result = isPalindrome('Hello!');
        expect(result).toBe(false);
      });
    });
    describe('and when provided with a sentence', () => {
      it('should return false', () => {
        const result = isPalindrome('Was it a cat or dog?');
        expect(result).toBe(false);
      });
    });
  });
});
