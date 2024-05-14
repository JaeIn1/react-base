import ColorPick from "./ColorPick";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

const TodoList = (props) => {
  const color = ["tomato", "lightblue", "lightyellow", "lightgray"];
  return (
    <>
      <div className="color_div">
        {color.map((e, i) => (
          <ColorPick color={e} key={i} setSelColor={props.setSelColor} setList={props.setList} />
        ))}
      </div>
      <div>
        <div></div>
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
              />
            ))}
      </ul>
    </>
  );
};
export default TodoList;
