import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodos();

  const handleDbClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "none",
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.desc}
    </li>
  );
};
