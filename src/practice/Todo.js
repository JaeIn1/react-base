import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoSearchInput from "./TodoSearchInput";
import TodoList from "./TodoList";
import "./Todo.css";
const TODO_KEY = "myTodo";

const Todo = () => {
  const [value, setvalue] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem(TODO_KEY)) ?? []);

  const [searchList, setSearchList] = useState([]);
  const [selColor, setSelColor] = useState("white");
  const [searchValue, setSearchValue] = useState("");
  const [searchCheck, setSearchCheck] = useState(false);

  return (
    <div className="parent">
      <h1>Todo List</h1>
      <TodoInput
        list={list}
        value={value}
        setvalue={setvalue}
        selColor={selColor}
        setSelColor={setSelColor}
        setList={setList}
        TODO_KEY={TODO_KEY}
      />
      <TodoSearchInput
        list={list}
        searchList={searchList}
        setSearchList={setSearchList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchCheck={searchCheck}
        setSearchCheck={setSearchCheck}
      />

      <TodoList
        list={list}
        setSelColor={setSelColor}
        setList={setList}
        searchCheck={searchCheck}
        searchList={searchList}
        searchValue={searchValue}
        setvalue={setvalue}
        TODO_KEY={TODO_KEY}
      />
    </div>
  );
};

export default Todo;
