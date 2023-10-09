import { useContext } from "react";
import { Todo } from "../interfaces/interfaces";
import { TodoContext } from "../context/TodoContexts";

interface props {
  todo: Todo;
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useContext(TodoContext);

  const handleDbClick = () => {
    // console.log("handleDbClick: ", todo.desc);
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
