import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

const TodoInput = (props) => {
  const onChangeInput = (e) => {
    props.setvalue(e.target.value);
  };

  const onKeyDownInput = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      if (props.value === "") {
        alert("할 일을 먼저 입력해주세요");
        return;
      }
      const result = [...props.list, [props.value, props.selColor, uuidv4()]];
      props.setList(result);
      props.setvalue("");
      props.setSelColor("white");
      localStorage.setItem("myTodo", JSON.stringify(result));
    }
  };
  return (
    <input
      type="text"
      placeholder="Add Todo.."
      className="TodoInput"
      value={props.value}
      onChange={onChangeInput}
      onKeyDown={onKeyDownInput}
      style={{
        backgroundColor: props.selColor,
      }}
    />
  );
};

export default TodoInput;
