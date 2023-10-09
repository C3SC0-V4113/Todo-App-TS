import { useContext } from "react";
import { TodoContext } from "../context/TodoContexts";
import { TodoItem } from ".";

export const TodoList = () => {
  const { todoState } = useContext(TodoContext);

  const { todos } = todoState;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
