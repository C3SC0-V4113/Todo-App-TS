import { useTodos } from "../hooks/useTodos";
import { TodoItem } from ".";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
