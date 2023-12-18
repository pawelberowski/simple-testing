import { getAlbums } from '../getAlbumsSortedByTitle/getAlbums';
import { getPhotos } from '../getPhotosSortedByTitle/getPhotos';

export async function getAlbumsWithPhotos() {
  try {
    const albums = await getAlbums();
    const photos = await getPhotos();

    return albums.map((album) => ({
      ...album,
      photos: photos.filter((photo) => photo.albumId === album.id),
    }));
  } catch (error) {
    throw new Error('Failed to get albums with photos');
  }
}
