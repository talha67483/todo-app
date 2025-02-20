import { createContext, useContext } from "react";
export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}
export interface ContextType {
  todos: Todo[];
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (updateTodo: { id: number; todo: string }) => void;
  toggleCompleted: (id: number) => void;
}

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo: string) => {
    todo;
  },
  deleteTodo: (id: number) => {
    id;
  },
  updateTodo: (updateTodo: { id: number; todo: string }) => {
    updateTodo;
  },
  toggleCompleted: (id: number) => {
    id;
  },
} as ContextType);

export const useTheme = () => {
  return useContext(TodoContext);
};

export const ThemeProvider = TodoContext.Provider;
