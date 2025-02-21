import React from "react";
import { Todo, useTheme } from "../context/useContext";
import { Save, SquarePen, Trash2 } from "lucide-react";
import { TodoUpdate } from "../App";
const TodoItem = ({ todos }: { todos: Todo }) => {
  const [todoEdit, setTodoEdit] = React.useState(false);
  const { deleteTodo, updateTodo, toggleCompleted } = useTheme();
  const [todoMsg, setTodoMsg] = React.useState(todos.todo);

  const todoUpdate: TodoUpdate = {
    id: todos.id,
    todo: todoMsg,
  };

  const remove = () => {
    deleteTodo(todos.id);
  };
  const editAble = () => {
    updateTodo(todoUpdate);
    setTodoEdit(false);
  };

  const toggle = () => {
    toggleCompleted(todos.id);
  };

  return (
    <div className=" flex justify-center items-center my-2 bg-[#DBE2EF]  h-[45px]  w-[300px] xl:w-[439px] mx-auto rounded-md     ">
      <input
        type="checkbox"
        className=" mx-[10px] "
        checked={todos.completed}
        onChange={toggle}
      />
      <input
        type="text"
        className={` ${
          todoEdit &&
          "border-[1px]  border-[#908c8c] mr-3 rounded-lg h-9 px-2 py-2"
        }  w-full   outline-none ${todos.completed && "line-through"} ${
          todoEdit && " no-underline "
        }   `}
        value={todoMsg}
        readOnly={!todoEdit}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <span className=" flex space-x-3  mr-2 ">
        <button
          onClick={() => {
            if (todoEdit) {
              editAble();
              console.log("ehhhe");
            } else setTodoEdit(!todoEdit);
          }}
        >
          {todoEdit ? (
            <Save
              className=" cursor-pointer   "
              size={20}
              color="#525151"
              strokeWidth={1.5}
            />
          ) : (
            <SquarePen
              className=" cursor-pointer   "
              size={18}
              color="#787878"
              strokeWidth={1.5}
            />
          )}
        </button>
        <button>
          <Trash2
            onClick={remove}
            className=" cursor-pointer   "
            size={18}
            color="#787878"
            strokeWidth={1.5}
          />
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
