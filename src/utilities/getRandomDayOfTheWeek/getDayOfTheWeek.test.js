import { getDayOfTheWeek } from './getDayOfTheWeek';

describe('The getDayOfTheWeek function', () => {
  describe('when provided with number 0', () => {
    it(`should return 'Monday'`, () => {
      const result = getDayOfTheWeek(0);
      expect(result).toBe('Monday');
    });
  });
  describe('when provided with number 1', () => {
    it(`should return 'Tuesday'`, () => {
      const result = getDayOfTheWeek(1);
      expect(result).toBe('Tuesday');
    });
  });
  describe('when provided with number 2', () => {
    it(`should return 'Wednesday'`, () => {
      const result = getDayOfTheWeek(2);
      expect(result).toBe('Wednesday');
    });
  });
  describe('when provided with number 3', () => {
    it(`should return 'Thursday'`, () => {
      const result = getDayOfTheWeek(3);
      expect(result).toBe('Thursday');
    });
  });
  describe('when provided with number 4', () => {
    it(`should return 'Friday'`, () => {
      const result = getDayOfTheWeek(4);
      expect(result).toBe('Friday');
    });
  });
  describe('when provided with number 5', () => {
    it(`should return 'Saturday'`, () => {
      const result = getDayOfTheWeek(5);
      expect(result).toBe('Saturday');
    });
  });
  describe('when provided with number 6', () => {
    it(`should return 'Sunday'`, () => {
      const result = getDayOfTheWeek(6);
      expect(result).toBe('Sunday');
    });
  });
  describe('when provided with number out of the range', () => {
    it(`should return undefined`, () => {
      const result = getDayOfTheWeek(-6);
      expect(result).toBe(undefined);
    });
  });
});
