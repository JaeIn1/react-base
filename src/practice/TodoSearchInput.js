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
        })
      );
    } else {
      props.setSearchCheck(false);
      props.setSearchList([]);
    }
    console.log(props.searchList);
    console.log(props.list);
  };
  return (
    <input
      type="text"
      placeholder="할 일을 검색해보세요"
      className="TodoInput"
      value={props.searchValue}
      onChange={onChangeSearchInput}
    />
  );
};

export default TodoSearchInput;
