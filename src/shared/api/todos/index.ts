import { get, push, ref, set } from 'firebase/database';

import { getAppDatabase } from '@/shared/firebase';

import { ITodo, TStoredTodo } from './todos.types';

const getTodos = async (): Promise<ITodo[]> => {
  const snapshot = await get(ref(getAppDatabase(), '/todos'));

  const todos: Record<string, TStoredTodo> = snapshot.val() ?? {};

  return (
    Object.keys(todos).map(
      (id): ITodo => ({
        id,
        ...todos[id],
      }),
    ) ?? []
  );
};

const getTodo = async (id: number): Promise<ITodo> => {
  const snapshot = await get(ref(getAppDatabase(), `/todos/${id}`));

  const todos: ITodo = snapshot.val();

  return todos;
};

const addTodo = async (text: string): Promise<{ id: string; text: string }> => {
  const todosRef = ref(getAppDatabase(), 'todos');
  const newTodoRef = push(todosRef);

  set(newTodoRef, {
    text,
  });

  return { id: newTodoRef.key as string, text };
};

export { addTodo, getTodo, getTodos };
