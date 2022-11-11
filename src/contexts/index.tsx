import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { HandleModalsProvider } from "./HandleModals";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./product";
import { UserProvider } from "./User";


interface ProviderProps {
    children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    return(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <HandleModalsProvider>
        <AuthProvider>
        <CartProvider>
        <ProductsProvider>
        <UserProvider>
              {children}
        </UserProvider>
        </ProductsProvider>
        </CartProvider>
        </AuthProvider>
        </HandleModalsProvider>
      </ThemeProvider>
    </BrowserRouter>
    )
};

export default Providers;
