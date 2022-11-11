import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../assets/styles/theme";
import { AuthProvider } from "./auth";
import { CartProvider } from "./Cart/useCart";
import { HandleModalsProvider } from "./HandleModals";
import { NewCartProvider } from "./NewCart";
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
        <NewCartProvider>
        <ProductsProvider>
        <UserProvider>
              {children}
        </UserProvider>
        </ProductsProvider>
        </NewCartProvider>
        </CartProvider>
        </AuthProvider>
        </HandleModalsProvider>
      </ThemeProvider>
    </BrowserRouter>
    )
};

export default Providers;
