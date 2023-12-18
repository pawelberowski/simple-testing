import { getPhotos } from './getPhotos';
import { getPhotosSortedByTitle } from './getPhotosSortedByTitle';

jest.mock('./getPhotos', () => {
  return {
    getPhotos: jest.fn(),
  };
});

describe('The function getPhotosSortedByTitle', () => {
  describe('when the getPhotos responds with an array of photos', () => {
    beforeEach(() => {
      getPhotos.mockResolvedValue([
        {
          albumId: 1,
          id: 1,
          title: 'accusamus beatae ad facilis cum similique qui sunt',
          url: 'https://via.placeholder.com/600/92c952',
          thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
          albumId: 1,
          id: 2,
          title: 'reprehenderit est deserunt velit ipsam',
          url: 'https://via.placeholder.com/600/771796',
          thumbnailUrl: 'https://via.placeholder.com/150/771796',
        },
        {
          albumId: 2,
          id: 3,
          title: 'officia porro iure quia',
          url: 'https://via.placeholder.com/600/24f355',
          thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        },
        {
          albumId: 3,
          id: 4,
          title: 'culpa odio esse',
          url: 'https://via.placeholder.com/600/d32776',
          thumbnailUrl: 'https://via.placeholder.com/150/d32776',
        },
      ]);
    });
    it('should return the photos sorted by the title in descending order', async () => {
      const result = await getPhotosSortedByTitle();

      expect(result[0].title).toBe(
        'accusamus beatae ad facilis cum similique qui sunt',
      );
      expect(result[1].title).toBe('reprehenderit est deserunt velit ipsam');
      expect(result[2].title).toBe('officia porro iure quia');
      expect(result[3].title).toBe('culpa odio esse');
    });
  });
  describe('when the getPhotos function responds with an error', () => {
    beforeEach(() => {
      getPhotos.mockImplementation(() => {
        throw new Error();
      });
    });
    it('should return an empty array', async () => {
      const result = await getPhotosSortedByTitle();
      expect(result).toEqual([]);
    });
  });
});
describe('The getPhotosSortedByTitle function', () => {
  it('should call the getUsers function', () => {
    getPhotosSortedByTitle();
    expect(getPhotos()).toHaveBeenCalled();
  });
});
