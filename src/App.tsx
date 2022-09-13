import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Hello Wolrd!</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
