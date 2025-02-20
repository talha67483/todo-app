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
  addTodo: (todo: string) => {},
  deleteTodo: (id: number) => {},
  updateTodo: (updateTodo: { id: number; todo: string }) => {},
  toggleCompleted: (id: number) => {},
} as ContextType);

export const useTheme = () => {
  return useContext(TodoContext);
};

export const ThemeProvider = TodoContext.Provider;
