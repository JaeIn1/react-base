import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoSearchInput from "./TodoSearchInput";
import TodoList from "./TodoList";
import "./Todo.css";
import TodoModal from "./TodoModal";

const Todo = () => {
  const [value, setvalue] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem("myTodo")) ?? []);

  const [searchList, setSearchList] = useState([]);
  const [selColor, setSelColor] = useState("white");
  const [searchValue, setSearchValue] = useState("");
  const [searchCheck, setSearchCheck] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      />
      {/* 모달 */}
      <TodoModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Todo;
