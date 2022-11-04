import { createContext, ReactNode, useContext, useState } from "react";
import Api from "../../services/api";
import toast from "react-hot-toast"


interface CartProviderProps {
    children: ReactNode;
}
interface IProduct {
    id: string;
    code: number;
    name: string;
    image: string;
    description?: string;
    category?: string;
    price: number;
    inventory?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
interface CartContextData {
    cart: IProduct[];
    addProduct: (productId: string) => Promise<void>;
    removeProduct: (productId: string) => void;
    itemCount:number;
    Total: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);
export const CartProvider = ({children}:CartProviderProps) => {
  const [itemCount, setItemCount] = useState(0);

    const [cart, setCart] =useState<IProduct[]>(() => {
        const storagedCart = localStorage.getItem("@Capivarapet:cart");
        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    })

    const addProduct = async (productId:string) => {
        const copyProductsCart = [... cart] 
        try {
            const item = copyProductsCart.find(
                    (product) => product.id === productId
                )
                if (!item) {
                    const product : any = await Api.get<IProduct>(
                        `product/${productId}`
                    );
                    copyProductsCart.push(product.data)
                }
                setCart(copyProductsCart, )
                localStorage.setItem(
                    "@Capivarapet:cart",
                    JSON.stringify([... copyProductsCart])
                );
                setItemCount(itemCount +1)
                console.log(cart)

                
        } catch (error) {
 
        }
    }
    const removeProduct = async (productId:string) => { 
        const copyProductsCart = [... cart]
         try {
            const item = copyProductsCart.find(
                (product) => product.id === productId
            )
            const arrayFiltered = copyProductsCart.filter(
                (product) => product.id !== productId
            );
            setCart(arrayFiltered)
            
            localStorage.setItem(
                "@RocketShoes:cart",
                JSON.stringify(arrayFiltered)
            )
            setItemCount(Math.max(itemCount - 1, 0))
            
         } catch (error) {
            
         }
     }
     const Total = cart.reduce((total,item) => (total+ item.price),0)
    
    return(
     <CartContext.Provider
        value={{ cart, addProduct,removeProduct,itemCount, Total}}
    >
        {children}
    </CartContext.Provider>
    )
}
export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}