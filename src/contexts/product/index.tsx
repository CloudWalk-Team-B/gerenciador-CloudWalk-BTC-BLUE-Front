import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import Api from "../../services/api";
import { Product } from "../../types/interface";

interface ProductsProviderProps {
    children: ReactNode
}

interface ProductsProviderData{
    products: Product[]
    handleGetProduct: ()=> void
    categories: string[]
}

const ProductContext = createContext<ProductsProviderData>({} as ProductsProviderData);

export const ProductsProvider = ({children}:ProductsProviderProps) => {

    const categories=["Brinquedos","Petiscos e Ração","Medicina e Saúde","Roupas para Pet","Higiene & Limpeza","Outros"];
    
    const [products, setProducts]= useState<Product[]>([]);

    const handleGetProduct = ()=>{
        Api.get("/product").then(res=> {setProducts(res.data)})
    }

    useEffect(()=>handleGetProduct(),[])

    return <ProductContext.Provider value={{ products, handleGetProduct, categories }}>{children}</ProductContext.Provider>
}

export const useProducts = () => useContext(ProductContext)