import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <Router />
    </div>
  );
}

export default App;
