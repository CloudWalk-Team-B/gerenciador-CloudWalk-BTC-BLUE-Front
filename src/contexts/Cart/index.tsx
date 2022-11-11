import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import Api from "../../services/api";
import { Product } from "../../types/interface";
import { useAuth } from "../auth";

interface CartProviderProps {
    children: ReactNode
}

interface Cart{
    id:string,
    product: Product
}

interface CartProviderData{
    cart: any,
    handleGetCart: ()=> void,
    price: number,
    setPrice: (prop:number)=>void,
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({children}:CartProviderProps) => {
    
    const [ price, setPrice ] = useState<number>(0)
    const [ oldPrice, setOldPrice ] = useState<number>(0)
    const [cart, setCart]= useState<Cart>();
    const { logged } = useAuth()

    
    const handleGetPrice = () =>{
      Api.get("/Cart")
      .then((res)=>{
        const data = res.data
        {data.id!=="" && data.map((element:any) =>{
            return(
                setPrice(price + element.product.price)
            ) 
         })}

      })
    }

    useEffect(()=>handleGetPrice(),[])

    const handleGetCart = ()=>{
        Api.get("/Cart")
        .then(res=> {
            setCart(res.data);
            
        })
        .catch(()=>{
            setCart({
            id:"", 
            product:{id: "",
                    code: 0,
                    name: "",
                    image: "",
                    description: "",
                    category: "",
                    price: 0,
                    inventory: true}
        })
        })
        
    }

    useEffect(()=>handleGetCart(),[logged])
    useEffect(()=>handleGetCart(),[])

    return <CartContext.Provider value={{ cart, handleGetCart, price, setPrice }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)