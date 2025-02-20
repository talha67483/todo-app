import React from "react";
import TodoItem from "./TodoItem";
import { Plus } from "lucide-react";
import { useTheme } from "../context/useContext";

const TodoForm = () => {
  const [input, setInput] = React.useState("");

  const { todos, addTodo } = useTheme();

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== "") {
      addTodo(input);
      setInput("");
    } else {
      alert("please type your todos");
    }
  };

  return (
    <section className=" sm md:w-[40vw] w-[350px] min-h-[500px] sm:min-h-[30vh] bg-[#ffff] mt-14 rounded-xl ">
      <h1 className=" w-full text-center text-[40px] font-normal  ">
        {" "}
        To Do App{" "}
      </h1>
      <form className=" flex justify-center my-3 " onSubmit={add}>
        <input
          type="text"
          placeholder="some words"
          className=" bg-[#DBE2EF] xl:w-[330px] min-h-[37px] text-[#212121] px-3 rounded-l-md outline-none "
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
        />
        <button className=" w-[45px] h-[37px]  text-white bg-[#AAAAAA] rounded-r-md cursor-pointer hover:bg-[#c1c0c0] ">
          <Plus className="  text-4xl  mx-[10px]  " />
        </button>
      </form>
      <div className=" xl:w-[450px]  w-[300px]  border-black border-b mx-auto "></div>
      <div>
        {todos.map((val) => (
          <div key={val.id}>
            <TodoItem todos={val} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoForm;
