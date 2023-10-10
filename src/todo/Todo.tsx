import { TodoList, TodoTitle } from "./components";
import { TodoProvider } from "./context/TodoProvider";

export const Todo = () => {
  return (
    <TodoProvider>
      <TodoTitle />
      <TodoList />
    </TodoProvider>
  );
};
