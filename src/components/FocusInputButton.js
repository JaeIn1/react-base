import { useRef } from "react";

const FocusInputButton = () => {
  const inputRef = useRef();
  //useRef 특정한 태그에 접근할 수 있도록 객체를 바인딩 시킨다.
  //참조 이외에 응용방법은
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>
      <div style={{ height: 2000 }}></div>
      <input ref={inputRef} type="text" />
      <div style={{ height: 2000 }}></div>
    </div>
  );
};
export default FocusInputButton;
