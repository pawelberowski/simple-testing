export function countCompletedTodos(todos) {
  return todos.reduce((numberOfCompletedTodos, todo) => {
    if (todo.completed) {
      return numberOfCompletedTodos + 1;
    }
    return numberOfCompletedTodos;
  }, 0);
}
