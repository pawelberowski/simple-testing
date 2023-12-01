import { countCompletedTodos } from './countCompletedTodos';

describe('The countCompletedTodos function', () => {
  describe('when provided with a valid array of todos', () => {
    let todos;
    beforeEach(() => {
      todos = [
        {
          id: 1,
          completed: true,
        },
        {
          id: 2,
          completed: false,
        },
        {
          id: 3,
          completed: true,
        },
        {
          id: 4,
          completed: false,
        },
      ];
    });
    it('should return the number of completed todos', () => {
      const result = countCompletedTodos(todos);
      expect(result).toBe(2);
    });
    it('should not change the number of todos in the array', () => {
      const initialLength = todos.length;
      countCompletedTodos(todos);
      expect(initialLength).toBe(todos.length);
    });
  });
});
