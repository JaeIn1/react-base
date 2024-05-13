const ColorPick = (props) => {
  const onClickColor = () => {
    props.setSelColor(props.color);
  };
  return (
    <button
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: props.color,
        border: "none",
        opacity: "80%",
        margin: "5px",
      }}
      onClick={onClickColor}
    ></button>
  );
};

export default ColorPick;
