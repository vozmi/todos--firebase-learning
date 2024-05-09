export interface ITodo {
  id: string;
  text: string;
}

export type TStoredTodo = Omit<ITodo, 'id'>;
