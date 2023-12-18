import { getUsersSortedByName } from './getUsersSortedByName';
import { getUsers } from './getUsers';

jest.mock('./getUsers', () => {
  return {
    getUsers: jest.fn(),
  };
});

describe('The function getUsersSortedByName', () => {
  describe('when the getUsers responds with an array of users', () => {
    beforeEach(() => {
      getUsers.mockResolvedValue([
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Marianne Leanne Graham',
        },
        {
          id: 3,
          name: 'Tom',
        },
      ]);
    });
    it('should return the users sorted by the name in descending order', async () => {
      const result = await getUsersSortedByName();

      expect(result[0].name).toBe('Marianne Leanne Graham');
      expect(result[1].name).toBe('Leanne Graham');
      expect(result[2].name).toBe('Tom');
    });
  });
  describe('when the getUsers function responds with an error', () => {
    beforeEach(() => {
      getUsers.mockImplementation(() => {
        throw new Error();
      });
    });
    it('should return an empty array', async () => {
      const result = await getUsersSortedByName();
      expect(result).toEqual([]);
    });
  });
});
