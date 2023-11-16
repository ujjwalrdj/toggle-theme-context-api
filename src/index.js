import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import ThemeContextProvider from "./store/ThemeConetextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <ThemeContextProvider> */}
    <App />
    {/* </ThemeContextProvider> */}
    {/* We can also use themecontext provider in index.js */}
  </StrictMode>
);
