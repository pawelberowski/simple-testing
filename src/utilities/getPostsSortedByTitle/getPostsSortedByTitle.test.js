import { getPostsSortedByTitle } from './getPostsSortedByTitle';

jest.mock('./getPosts', () => {
  return {
    getPosts: () => {
      return Promise.resolve([
        {
          userId: 1,
          id: 1,
          title: 'Short title',
          body: 'Hello world!',
        },
        {
          userId: 1,
          id: 1,
          title: 'Very long title',
          body: 'Hello world!',
        },
        {
          userId: 1,
          id: 1,
          title: 'Medium title',
          body: 'Hello world!',
        },
      ]);
    },
  };
});

describe('The getPostsSortedByTitle function', () => {
  it('should return the posts sorted by the length of the title descending', async () => {
    const result = await getPostsSortedByTitle();

    expect(result[0].title).toBe('Very long title');
    expect(result[1].title).toBe('Medium title');
    expect(result[2].title).toBe('Short title');
  });
});
