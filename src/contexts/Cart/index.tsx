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
    value: number,
    handleValue: ()=> void,
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({children}:CartProviderProps) => {
    
    const [ value, setValue ] = useState<number>(0)
    const [cart, setCart]= useState<Cart>();
    const { logged } = useAuth()

    const handleValue = () => {
        const data:any = cart
        return(
            (cart && cart.id!=="")&& data.map((element:any)=>{
            const currentValue:number = value
            {setValue(element.product.price)}
    })
    )
    }

    const handleGetCart = ()=>{
        Api.get("/Cart")
        .then(res=> {
            setCart(res.data);
            handleValue()
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

    return <CartContext.Provider value={{ cart, handleGetCart, value, handleValue }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)