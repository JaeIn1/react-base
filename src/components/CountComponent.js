import React, { useCallback, useEffect, useState } from "react";
export default function CountComponent() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(true);

  const ChangeValue = () => {
    setValue1((v) => !v);
  };

  //콜백함수 자체를 반환하겠다라는 의미
  const addCount = useCallback(
    (count) => {
      setCount(count);
    },
    [setCount]
  );
  return (
    <div>
      <div>{value1}</div>
      <button
        onClick={(e) => {
          ChangeValue();
        }}
      >
        state변경
      </button>
      <div>{count}</div>
      <button
        onClick={(e) => {
          addCount(count + 1);
        }}
      >
        1증가
      </button>
    </div>
  );
}
