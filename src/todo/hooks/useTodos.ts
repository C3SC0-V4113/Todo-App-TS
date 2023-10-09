import { useContext } from "react";
import { TodoContext } from "../context/TodoContexts";

export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);

  const { todos } = todoState;

  return {
    // properties
    todos,
    pendingTodos: todos.filter((todo) => !todo.completed),
    // methods
    toggleTodo,
  };
};
