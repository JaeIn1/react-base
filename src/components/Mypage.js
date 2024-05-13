import React from "react";
import { useTest, useTheme } from "./ThemeProvider";
export default function MyPage() {
  const { theme } = useTheme();
  const { theme2 } = useTest();
  console.log(theme2);
  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "#e9e9e9" }
          : { backgroundColor: "tomato" }
      }
    >
      <div style={{ minHeight: 600 }}> MyPage</div>
    </div>
  );
}
