export async function getAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  if (!response.ok) {
    throw new Error('Something went wrong when fetching albums');
  }
  return response.json();
}
