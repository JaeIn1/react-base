import ColorPick from "./ColorPick";
import ListItem from "./ListItem";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useEffect, useState } from "react";

const TodoList = (props) => {
  const color = ["tomato", "lightblue", "lightyellow", "lightgray"];
  const [allCheck, setAllCheck] = useState(false);
  const [curAll, setCulCheck] = useState(false);
  const [checkList, setCheckList] = useState([]);

  const onClickSetAllCheck = () => {
    setCulCheck((prev) => !prev);
    setAllCheck((prev) => !prev);
    if (!allCheck) {
      setCheckList(props.list.map((e) => e[2]));
    } else setCheckList([]);
  };
  console.log(checkList);

  return (
    <>
      <div className="color_div">
        {color.map((e, i) => (
          <ColorPick color={e} key={i} setSelColor={props.setSelColor} setList={props.setList} />
        ))}
      </div>
      <div className="all_div">
        <RadioButtonCheckedIcon className={`all_select_btn ${curAll ? "curAll" : ""}`} onClick={onClickSetAllCheck} />
        <DeleteOutlineIcon className="all_delete_btn" />
      </div>
      <ul className="list_ul">
        {props.searchCheck
          ? props.searchList.map((e, i) => (
              <ListItem
                text={e[0]}
                key={uuidv4()}
                color={e[1]}
                id={e[2]}
                list={props.list}
                setList={props.setList}
                searchValue={props.searchValue}
                setvalue={props.setvalue}
                TODO_KEY={props.TODO_KEY}
                allCheck={allCheck}
                setAllCheck={setAllCheck}
                setCheckList={setCheckList}
              />
            ))
          : props.list.map((e, i) => (
              <ListItem
                text={e[0]}
                key={uuidv4()}
                color={e[1]}
                id={e[2]}
                list={props.list}
                setList={props.setList}
                setvalue={props.setvalue}
                TODO_KEY={props.TODO_KEY}
                allCheck={allCheck}
                setAllCheck={setAllCheck}
                setCulCheck={setCulCheck}
                checkList={checkList}
                setCheckList={setCheckList}
              />
            ))}
      </ul>
    </>
  );
};
export default TodoList;
