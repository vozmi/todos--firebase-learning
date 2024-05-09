import { getTodos } from '@/shared/api/todos';

export const TodoList = async () => {
  const todos = await getTodos();

  return (
    <div>
      {todos.map((todo) => (
        <pre key={todo.id}>{JSON.stringify(todo, null, 2)}</pre>
      ))}
    </div>
  );
};
