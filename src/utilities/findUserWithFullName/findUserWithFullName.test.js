import { findUserWithFullName } from './findUserWithFullName';

describe('The findUserWithFullName function', () => {
  describe('when provided with a valid users array', () => {
    let usersArray;
    beforeEach(() => {
      usersArray = [
        {
          firstName: 'John',
          lastName: 'Smith',
          heightInCm: 184,
        },
        {
          firstName: 'Kate',
          lastName: 'Williams',
          heightInCm: 169,
        },
      ];
    });
    describe('and when provided with a valid full name', () => {
      it('should return the user object', () => {
        const kate = findUserWithFullName(usersArray, 'Kate Williams');
        expect(kate.heightInCm).toBe(169);
      });
    });
    describe('and when provided with an invalid full name', () => {
      it('should return undefined', () => {
        const mike = findUserWithFullName(usersArray, 'Mike Williams');
        expect(mike).toBe(undefined);
      });
    });
  });
});