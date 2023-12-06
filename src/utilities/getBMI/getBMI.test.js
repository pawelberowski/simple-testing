import { getBMI } from './getBMI';

describe('The getBMI function', () => {
  describe('when provided with two numbers', () => {
    describe('when bmi under 18.5', () => {
      it('should return Underweight', () => {
        const result = getBMI(50, 1.8);
        expect(result).toBe('Underweight');
      });
    });
    describe('when bmi between 18.5 and 25', () => {
      it('should return Normal', () => {
        const result = getBMI(60, 1.8);
        expect(result).toBe('Normal');
      });
    });
    describe('when bmi between 25 and 30', () => {
      it('should return Overweight', () => {
        const result = getBMI(90, 1.8);
        expect(result).toBe('Overweight');
      });
    });
    describe('when bmi above 30', () => {
      it('should return Obese', () => {
        const result = getBMI(100, 1.8);
        expect(result).toBe('Obese');
      });
    });
  });
  describe('When not provided with two numbers', () => {
    it('should return please provide weight as a number of kilograms and height as a number in meters', () => {
      const result = getBMI(NaN, "12");
      expect(result).toBe('please provide weight as a number of kilograms and height as a number in meters')
    });
  })
});
