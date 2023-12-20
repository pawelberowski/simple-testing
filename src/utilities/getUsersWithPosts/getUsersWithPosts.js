import { getUsers } from '../getUsersSortedByName/getUsers';
import { getPosts } from '../getPostsSortedByTitle/getPosts';

export async function getUsersWithPosts() {
  try {
    const [users, posts] = await Promise.all([getUsers(), getPosts()]);

    return users.map((user) => ({
      ...user,
      posts: posts.filter((post) => post.userId === user.id),
    }));
  } catch (error) {
    throw new Error('Failed to get users with posts');
  }
}
