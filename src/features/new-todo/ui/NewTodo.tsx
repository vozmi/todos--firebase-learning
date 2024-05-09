'use client';

import { useRouter } from 'next/navigation';

import { addTodo } from '@/shared/api/todos';

import styles from './NewTodo.module.css';

export const NewTodo = () => {
  const router = useRouter();

  const onAddTodo = async () => {
    const text = window.prompt();

    if (!text) {
      return;
    }

    await addTodo(text);
    router.refresh();
  };

  return (
    <button className={styles.button} onClick={onAddTodo}>
      Add todo
    </button>
  );
};
