import { isElementInArray } from "./isElementInArray";

describe('The isElementInArray function', () => {
  describe('when provided with a valid array of strings', () => {
    let array;
    beforeEach(() => {
      array = ['orange', 'banana', 'strawberry'];
    })
    describe('when the desired element is not in the array', () => {
      it('should return false', () => {
        const result = isElementInArray(array, 'coconut');
        expect(result).toBe(false);
      })
    })
    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(array, 'strawberry');
        expect(result).toBe(true);
      })
    })
    it('should not change the length of the provided array', () => {
      const initialLength = array.length;
      isElementInArray(array, 'strawberry');
      expect(array.length).toBe(initialLength)
    })
  })
})