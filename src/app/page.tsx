import { TodoList } from '@/features/list-todos/ui';
import { NewTodo } from '@/features/new-todo/ui';

export default function Home() {
  return (
    <main>
      <TodoList />
      <NewTodo />
    </main>
  );
}
