import { useContext } from "react";
import Header from "./Header";
import { ThemeContext } from "../store/ThemeConetextProvider";

export default function Page() {
  const themeCtx = useContext(ThemeContext);
  return (
    <div id="app" className={themeCtx.theme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
