import React, { useState, useContext, createContext } from "react"; //
const ThemeContext = createContext();
//

//자식 컴포넌트에서 사용할려면 useContext()를 사용해서 불러올 수 있다.
// 객체를 통해서 받아 올 수 있고
// 지금 useTheme()라는 함수를 미리 선언해서 자식에서 객체를 생성 안해도 되고
// useTheme()함수만 불러오면 객체로 state를 받아올 수 있다.
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
