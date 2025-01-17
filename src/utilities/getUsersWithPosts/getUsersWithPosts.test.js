import { getUsersWithPosts } from './getUsersWithPosts';
import { getPosts } from '../getPostsSortedByTitle/getPosts';
import { getUsers } from '../getUsersSortedByName/getUsers';

jest.mock('../getUsersSortedByName/getUsers', () => {
  return {
    getUsers: jest.fn(),
  };
});

jest.mock('../getPostsSortedByTitle/getPosts', () => {
  return {
    getPosts: jest.fn(),
  };
});

describe('The function getUsersWithPosts function', () => {
  describe('when the getUsers responds with an array of users', () => {
    beforeEach(() => {
      getUsers.mockResolvedValue([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
        },
      ]);
    });
    describe('and when getPost responds with an array of posts', () => {
      beforeEach(() => {
        getPosts.mockResolvedValue([
          {
            userId: 1,
            id: 1,
            title: 'Hello world 1',
            body: 'Lorem Ipsum',
          },
          {
            userId: 1,
            id: 2,
            title: 'Hello world 2',
            body: 'Lorem Ipsum 2',
          },
          {
            userId: 2,
            id: 3,
            title: 'Hello world 3',
            body: 'Lorem Ipsum 3',
          },
          {
            userId: 3,
            id: 4,
            title: 'Hello world 4',
            body: 'Lorem Ipsum 4',
          },
        ]);
      });
      it('should call both the getUsers and the getPosts functions', async () => {
        await getUsersWithPosts();
        expect(getUsers).toHaveBeenCalled();
        expect(getPosts).toHaveBeenCalled();
      });
      it('should return an array of users with their posts', async () => {
        const result = await getUsersWithPosts();

        expect(result).toEqual([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            posts: [
              {
                userId: 1,
                id: 1,
                title: 'Hello world 1',
                body: 'Lorem Ipsum',
              },
              {
                userId: 1,
                id: 2,
                title: 'Hello world 2',
                body: 'Lorem Ipsum 2',
              },
            ],
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            posts: [
              {
                userId: 2,
                id: 3,
                title: 'Hello world 3',
                body: 'Lorem Ipsum 3',
              },
            ],
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            posts: [
              {
                userId: 3,
                id: 4,
                title: 'Hello world 4',
                body: 'Lorem Ipsum 4',
              },
            ],
          },
        ]);
      });
    });
  });
});
