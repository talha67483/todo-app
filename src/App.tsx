import React from "react";
import TodoForm from "./components/TodoForm";
import { ContextType, ThemeProvider } from "./context/useContext";
import { Todo } from "./context/useContext";

const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const addTodo = (todo: string) => {
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
  };
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((val) => val.id !== id));
  };
  const updateTodo = () => {};
  const toggleCompleted = () => {};

  return (
    <ThemeProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <main className=" w-full min-h-screen bg-[#3F72AF]">
        <div className=" grid place-content-center  ">
          <TodoForm />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
