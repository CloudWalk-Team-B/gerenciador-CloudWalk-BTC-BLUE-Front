import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
           <Navbar/>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
