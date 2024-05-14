import "./ListItem.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const ListItem = (props) => {
  const [update, setUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(props.text);
  const [done, setDone] = useState(false);

  const onClickDelete = () => {
    let newArr = props.list.filter((item) => item[2] !== props.id);
    localStorage.setItem(props.TODO_KEY, JSON.stringify(newArr));
    props.setList(newArr);
  };

  const onClickUpdate = () => {
    setUpdate((prev) => !prev);
  };

  const onChangeUpdateText = (e) => {
    setUpdateText(e.target.value);
  };

  const onKeyDownUpdate = (e) => {
    if (e.key === "Enter") {
      const updatedList = props.list.map((item) => {
        if (item[2] === props.id) {
          return [updateText, item[1], props.id];
        }
        return item;
      });
      localStorage.setItem(props.TODO_KEY, JSON.stringify(updatedList));
      props.setList(updatedList);
      setUpdate(false);
    }
  };

  const onClickDone = () => {
    setDone((prev) => !prev);
  };

  return (
    <li
      className={`list_item`}
      style={{
        backgroundColor: props.color,
        color: "black",
        position: "relative",
      }}
    >
      {done ? (
        <CheckIcon onClick={onClickDone} className="done_icon" />
      ) : (
        <button className="done_btn" onClick={onClickDone}></button>
      )}
      {update ? (
        <input
          type="text"
          className="update_input"
          value={updateText}
          onChange={onChangeUpdateText}
          onKeyDown={onKeyDownUpdate}
          autoFocus
        />
      ) : (
        <div className={`list_text ${done ? "done" : ""}`}>{props.text}</div>
      )}
      <div className="todoList_setting">
        <CreateIcon className="update_btn" onClick={onClickUpdate} />
        <DeleteIcon className="delete_btn" onClick={onClickDelete} />
      </div>
    </li>
  );
};

export default ListItem;
