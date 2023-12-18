import { getAlbums } from '../getAlbumsSortedByTitle/getAlbums';
import { getPhotos } from '../getPhotosSortedByTitle/getPhotos';
import { getAlbumsWithPhotos } from './getAlbumsWithPhotos';

jest.mock('../getAlbumsSortedByTitle/getAlbums', () => {
  return {
    getAlbums: jest.fn(),
  };
});

jest.mock('../getPhotosSortedByTitle/getPhotos', () => {
  return {
    getPhotos: jest.fn(),
  };
});

describe('The getAlbumsWithPhotosFunction', () => {
  describe('when getAlbums responds with an array of albums', () => {
    beforeEach(() => {
      getAlbums.mockResolvedValue([
        {
          userId: 1,
          id: 1,
          title: 'Album1 title',
        },
        {
          userId: 1,
          id: 2,
          title: 'Album2 title',
        },
        {
          userId: 2,
          id: 3,
          title: 'Album3 title',
        },
      ]);
    });
    describe('and when getPhotos responds with an array of photos', () => {
      beforeEach(() => {
        getPhotos.mockResolvedValue([
          {
            albumId: 1,
            id: 1,
            title: 'Photo title #1',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
          },
          {
            albumId: 1,
            id: 2,
            title: 'Photo title #2',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
          {
            albumId: 2,
            id: 3,
            title: 'Photo title #3',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
          },
        ]);
      });
      it('both the getAlbums and the getPhotos functions', async () => {
        await getAlbumsWithPhotos();
        expect(getAlbums).toHaveBeenCalled();
        expect(getPhotos).toHaveBeenCalled();
      });
      it('should return an array of albums with photos', async () => {
        const result = await getAlbumsWithPhotos();

        expect(result[0]).toEqual({
          userId: 1,
          id: 1,
          title: 'Album1 title',
          photos: [
            {
              albumId: 1,
              id: 1,
              title: 'Photo title #1',
              url: 'https://via.placeholder.com/600/92c952',
              thumbnailUrl: 'https://via.placeholder.com/150/92c952',
            },
            {
              albumId: 1,
              id: 2,
              title: 'Photo title #2',
              url: 'https://via.placeholder.com/600/771796',
              thumbnailUrl: 'https://via.placeholder.com/150/771796',
            },
          ],
        });
      });
    });
  });
});
