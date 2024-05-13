import React, { useState, useEffect } from "react";

const BlinkComponent = ({ text }) => {
  const [showText, setShowText] = useState(true);

  /* useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("호출");
      setShowText((showText) => {
        return !showText;
      });
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []); */

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("호출");
      setShowText(!showText);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{showText ? text : null}</div>;
};

export default BlinkComponent;
