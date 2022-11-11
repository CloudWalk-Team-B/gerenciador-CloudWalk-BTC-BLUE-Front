import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import Api from "../../services/api";
import { Product } from "../../types/interface";
import { useAuth } from "../auth";

interface CartProviderProps {
    children: ReactNode
}

interface CartProviderData{
    cart: Product[]
    handleGetCart: ()=> void
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const NewCartProvider = ({children}:CartProviderProps) => {
    
    const [cart, setCart]= useState([]);
    const { logged } = useAuth()

    const handleGetCart = ()=>{
        Api.get("/Cart").then(res=> {setCart(res.data)})
        .then(()=>{
            console.log(cart)
        })
        .catch(()=>{})
        
    }

    useEffect(()=>handleGetCart(),[logged])

    return <CartContext.Provider value={{ cart, handleGetCart }}>{children}</CartContext.Provider>
}

export const useNewCart = () => useContext(CartContext)