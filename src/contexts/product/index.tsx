import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import Api from "../../services/api";
import { Product } from "../../types/interface";

interface ProductsProviderProps {
    children: ReactNode
}

interface ProductsProviderData{
    products: Product[]
    handleGetProduct: ()=> void
}

const ProductContext = createContext<ProductsProviderData>({} as ProductsProviderData);

export const ProductsProvider = ({children}:ProductsProviderProps) => {

    const token = localStorage.getItem("token")

    const [products, setProducts]= useState<Product[]>([]);

    const handleGetProduct = ()=>{
        Api.get("/product").then(res=> {setProducts(res.data)})
    }

    useEffect(()=>handleGetProduct(),[])

    return <ProductContext.Provider value={{ products, handleGetProduct }}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext)