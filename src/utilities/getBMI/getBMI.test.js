import { getBMI } from './getBMI';

describe('The getBMI function', () => {
  describe('when provided with two numbers', () => {
    describe('and when bmi is under 18.5', () => {
      it('should return Underweight', () => {
        const result = getBMI(50, 1.8);
        expect(result).toBe('Underweight');
      });
    });
    describe('and when bmi is between 18.5 and 25', () => {
      it('should return Normal', () => {
        const result = getBMI(60, 1.8);
        expect(result).toBe('Normal');
      });
    });
    describe('and when bmi is between 25 and 30', () => {
      it('should return Overweight', () => {
        const result = getBMI(90, 1.8);
        expect(result).toBe('Overweight');
      });
    });
    describe('and when bmi is above 30', () => {
      it('should return Obese', () => {
        const result = getBMI(100, 1.8);
        expect(result).toBe('Obese');
      });
    });
  });
  describe('When not provided with two numbers', () => {
    it('should throw an error with a specific message', () => {
      try {
        getBMI(NaN, '12');
      } catch (error) {
        expect(error.message).toBe(
          'please provide weight as a number of kilograms and height as a number in meters',
        );
      }
    });
  });
});
