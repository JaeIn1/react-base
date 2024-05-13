import "./ListItem.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ListItem = (props) => {
  const [update, setUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(props.text);

  const onClickDelete = (e) => {
    let delete_id = e.target.parentNode.parentNode.id;
    let newArr = props.list.filter((e) => e[2] !== delete_id);
    localStorage.setItem("myTodo", JSON.stringify(newArr));
    console.log(props.list);
    props.setList(newArr);
  };

  const onClickUpdate = (e) => {
    console.log(props.id);
    setUpdate((prev) => !prev);
  };

  const onChangeUpdateText = (e) => {
    setUpdateText(e.target.value);
  };

  const onKeyDownUpdate = (e) => {
    if (e.key === "Enter") {
      const updatedList = props.list.map((item) => {
        if (item[2] === props.id) {
          return [updateText, item[1]]; // Update text for the specific item
        }
        return item;
      });
      localStorage.setItem("myTodo", JSON.stringify(updatedList)); // Update localStorage
      props.setList(updatedList); // Update state with the new list
      setUpdate(false); // Hide the input field after updating
    }
  };

  return update ? (
    <li
      className="update_li"
      id={props.id}
      style={{
        backgroundColor: props.color,
        color: "black",
        padding: "10px 0px",
        marginBottom: "5px",
        height: "40px",
        position: "relative",
      }}
    >
      <input
        type="text"
        className="update_input"
        value={updateText}
        onChange={onChangeUpdateText}
        onKeyDown={onKeyDownUpdate}
      />
      <CreateIcon className="update_btn" onClick={onClickUpdate} />
      <DeleteIcon className="delete_btn" onClick={onClickDelete} />
    </li>
  ) : (
    <li
      className="list_item"
      id={props.id}
      style={{
        backgroundColor: props.color,
        color: "black",
        padding: "10px 20px",
        marginBottom: "5px",
        height: "40px",
        position: "relative",
      }}
    >
      <div className="list_text">{props.text}</div>
      <CreateIcon className="update_btn" onClick={onClickUpdate} />
      <DeleteIcon className="delete_btn" onClick={onClickDelete} />
    </li>
  );
};

export default ListItem;
