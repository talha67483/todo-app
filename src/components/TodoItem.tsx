import React from "react";
import { Todo, useTheme } from "../context/useContext";
import { SquarePen, Trash, Trash2 } from "lucide-react";
const TodoItem = ({ todos }: { todos: Todo }) => {
  const [todoEdit, setTodoEdit] = React.useState(false);
  const { deleteTodo } = useTheme();

  const remove = () => {
    deleteTodo(todos.id);
  };

  return (
    <div className=" flex justify-center my-2 bg-[#DBE2EF]  h-[45px]  w-[300px] xl:w-[439px] mx-auto rounded-md     ">
      <input type="checkbox" className=" mx-[10px] " />
      <input
        type="text"
        className=" w-full   outline-none  "
        value={todos.todo}
        readOnly={!todoEdit}
      />
      <span className=" flex space-x-3  mr-2 ">
        <button>
          <SquarePen
            className=" cursor-pointer   "
            size={18}
            color="#787878"
            strokeWidth={1.5}
          />
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
