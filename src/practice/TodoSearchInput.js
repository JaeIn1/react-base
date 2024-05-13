import SearchIcon from "@mui/icons-material/Search";

const TodoSearchInput = (props) => {
  const onChangeSearchInput = (e) => {
    let inputValue = e.target.value;
    props.setSearchValue(e.target.value);
    if (inputValue.length > 0) {
      props.setSearchCheck(true);
      props.setSearchList(
        props.list.filter((e) => {
          if (e[0].includes(inputValue)) {
            return [e[0], e[1]];
          }
        }),
      );
    } else {
      props.setSearchCheck(false);
      props.setSearchList([]);
    }
    console.log(props.searchList);
    console.log(props.list);
  };
  return (
    <div className="search_div">
      <input
        type="text"
        placeholder="Search note..."
        className="TodoInput_search"
        value={props.searchValue}
        onChange={onChangeSearchInput}
      />
      <SearchIcon className="todo_search_icon" />
    </div>
  );
};

export default TodoSearchInput;
