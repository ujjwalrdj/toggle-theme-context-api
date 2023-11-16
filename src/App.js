import Page from "./components/Page";
import ThemeContextProvider from "./store/ThemeConetextProvider";
import "./styles.css";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
