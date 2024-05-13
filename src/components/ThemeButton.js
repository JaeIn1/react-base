import React from "react";
import { useTheme } from "./ThemeProvider";
export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>페이지 색상 바꾸기</button>;
}
