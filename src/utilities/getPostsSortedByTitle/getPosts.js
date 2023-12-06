export const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  const response = await fetch(POSTS_URL);
  if (!response.ok) {
    throw new Error('Something went wrong when fetching posts');
  }
  return response.json();
}
