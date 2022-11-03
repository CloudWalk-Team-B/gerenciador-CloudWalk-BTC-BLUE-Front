import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { HandleModalsProvider } from "./HandleModals";
import { ProductsProvider } from "./product";


interface ProviderProps {
    children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    return(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HandleModalsProvider>
        <AuthProvider>
        <ProductsProvider>
              {children}
        </ProductsProvider>
        </AuthProvider>
        </HandleModalsProvider>
      </ThemeProvider>
    </BrowserRouter>
    )
};

export default Providers;
