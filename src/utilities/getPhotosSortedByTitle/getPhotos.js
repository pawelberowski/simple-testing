export async function getPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!response.ok) {
    throw new Error('Something went wrong when fetching photos');
  }
  return response.json();
}
