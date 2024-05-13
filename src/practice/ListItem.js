import "./ListItem.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ListItem = (props) => {
  const [update, setUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(props.text);

  const onClickDelete = () => {
    let newArr = props.list.filter((item) => item[2] !== props.id);
    localStorage.setItem("myTodo", JSON.stringify(newArr));
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
      localStorage.setItem("myTodo", JSON.stringify(updatedList));
      props.setList(updatedList);
      setUpdate(false);
    }
  };

  return (
    <li
      className="list_item"
      style={{
        backgroundColor: props.color,
        color: "black",
        marginBottom: "5px",
        height: "40px",
        position: "relative",
      }}
    >
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
        <div className="list_text">{props.text}</div>
      )}
      <CreateIcon className="update_btn" onClick={onClickUpdate} />
      <DeleteIcon className="delete_btn" onClick={onClickDelete} />
    </li>
  );
};

export default ListItem;
