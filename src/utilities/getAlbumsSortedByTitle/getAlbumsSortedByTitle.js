import { getAlbums } from './getAlbums';

export async function getAlbumsSortedByTitle() {
  try {
    const albums = await getAlbums();

    return albums.sort((firstAlbum, secondAlbum) => {
      return secondAlbum.title.length - firstAlbum.title.length;
    });
  } catch {
    return [];
  }
}
