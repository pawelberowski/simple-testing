import { countCompletedTodos } from './countCompletedTodos';

export async function getNumberOfCompletedTodos() {
  const todosResponse = await fetch(
    'https://jsonplaceholder.typicode.com/todos',
  );
  const todosData = todosResponse.json();
  return countCompletedTodos(todosData);
}
