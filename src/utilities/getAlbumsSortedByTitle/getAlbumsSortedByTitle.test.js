import { getAlbums } from './getAlbums';
import { getAlbumsSortedByTitle } from './getAlbumsSortedByTitle';

jest.mock('./getAlbums', () => {
  return {
    getAlbums: jest.fn(),
  };
});

describe('The function getAlbumsSortedByTitle', () => {
  it('should call the getAlbums function', () => {
    getAlbumsSortedByTitle();
    expect(getAlbums).toHaveBeenCalled();
  });
  describe('when the getAlbums responds with an array of albums', () => {
    beforeEach(() => {
      getAlbums.mockResolvedValue([
        {
          userId: 1,
          id: 1,
          title: 'quidem enim',
        },
        {
          userId: 1,
          id: 2,
          title: 'sunt qui excepturi placeat culpa pulpa',
        },
        {
          userId: 1,
          id: 3,
          title: 'omnis laborum odio',
        },
      ]);
    });
    it('should return the albums sorted by the title in descending order', async () => {
      const result = await getAlbumsSortedByTitle();

      expect(result[0].title).toBe('sunt qui excepturi placeat culpa pulpa');
      expect(result[1].title).toBe('omnis laborum odio');
      expect(result[2].title).toBe('quidem enim');
    });
  });
  describe('when the getAlbums function responds with an error', () => {
    beforeEach(() => {
      getAlbums.mockImplementation(() => {
        throw new Error();
      });
    });
    it('should return an empty array', async () => {
      const result = await getAlbumsSortedByTitle();
      expect(result).toEqual([]);
    });
  });
});
