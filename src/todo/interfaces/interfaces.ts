export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todo: Todo[];
  completed: number;
  pending: number;
}
