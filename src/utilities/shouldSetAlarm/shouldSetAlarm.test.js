import { shouldSetAlarm } from './shouldSetAlarm';

describe('The shouldSetAlarm function', () => {
  describe('when isEmployed parameter is set to true', () => {
    describe('when isOnVacation parameter is set to false', () => {
      it('should return true', () => {
        const result = shouldSetAlarm(true, false);
        expect(result).toBe(true);
      });
    });
    describe('when isOnVacation parameter is set to true', () => {
      it('should return false', () => {
        const result = shouldSetAlarm(true, true);
        expect(result).toBe(false);
      });
    });
  });
  describe('when isEmployed parameter is set to false', () => {
    describe('when isOnVacation parameter is set to false', () => {
      it('should return true', () => {
        const result = shouldSetAlarm(false, false);
        expect(result).toBe(false);
      });
    });
    describe('when isOnVacation parameter is set to true', () => {
      it('should return false', () => {
        const result = shouldSetAlarm(false, true);
        expect(result).toBe(false);
      });
    });
  });
});
