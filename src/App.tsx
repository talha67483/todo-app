import React from "react";
import TodoForm from "./components/TodoForm";
import { ThemeProvider } from "./context/useContext";
import { Todo } from "./context/useContext";
export interface TodoUpdate {
  id: number;
  todo: string;
}

const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const addTodo = (todo: string) => {
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
  };
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((val) => val.id !== id));
  };
  const updateTodo = (todoUpdate: TodoUpdate) => {
    setTodos(
      todos.map((prevTodo) =>
        prevTodo.id === todoUpdate.id
          ? { ...prevTodo, todo: todoUpdate.todo }
          : prevTodo
      )
    );
  };
  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

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
