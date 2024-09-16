import { shouldSetAlarm } from './shouldSetAlarm';

describe('The shouldSetAlarm function', () => {
  describe('when the isEmployed parameter is set to true', () => {
    describe('and when the isOnVacation parameter is set to false', () => {
      it('should return true', () => {
        const result = shouldSetAlarm({
          isEmployed: true,
          isOnVacation: false,
        });
        expect(result).toBe(true);
      });
    });
    describe('and when the isOnVacation parameter is set to true', () => {
      it('should return false', () => {
        const result = shouldSetAlarm({
          isEmployed: true,
          isOnVacation: true,
        });
        expect(result).toBe(false);
      });
    });
  });
  describe('when the isEmployed parameter is set to false', () => {
    describe('and when the isOnVacation parameter is set to false', () => {
      it('should return true', () => {
        const result = shouldSetAlarm({
          isEmployed: false,
          isOnVacation: false,
        });
        expect(result).toBe(false);
      });
    });
    describe('and when the isOnVacation parameter is set to true', () => {
      it('should return false', () => {
        const result = shouldSetAlarm({
          isEmployed: false,
          isOnVacation: true,
        });
        expect(result).toBe(false);
      });
    });
  });
});
