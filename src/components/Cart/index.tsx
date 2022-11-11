import * as S from "./style";
import { BiTrash } from "react-icons/bi";
import { useCart } from "../../contexts/Cart/useCart";
import { Product } from "../../types/interface";
import Logo from "../../assets/images/logoRoxa.png"
import { useNewCart } from "../../contexts/NewCart";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

// interface cartProduct{
//   {
//     idProduct:string
//   }
// }

  const Cart: React.FC = () => {
    const { cart, handleGetCart } = useNewCart()
    const product:Product = (JSON.parse(localStorage.getItem("currentProduct") || ""));

    const handleRemoveProduct = (productId: string) =>{
      const data = {
        productId: productId
      }
      Api.post("/Cart/removeItem", data)
        .then(()=>handleGetCart())
        .catch(()=>toast.error("Erro ao remover produto"))
    }
    
    return (
      <S.Wrapper>
        <S.BoxTotal><S.img src={Logo} /> <h2>Sacola</h2></S.BoxTotal>
        {
          cart.map((value) =>(
            <S.List>
              
            <S.box>
              <S.img src={value.product.image}/>
              <S.Name>{value.product.name}</S.Name>
              <S.Item>{value.product.price}</S.Item>
              <div onClick={()=>handleRemoveProduct(value.id)}><BiTrash/></div>
            </S.box>
            </S.List>
          ))
        }
        <S.BoxTotal>
          <S.SubTotal>Subtotal :</S.SubTotal>           
          <S.Item>{}</S.Item>
        </S.BoxTotal>
        <S.BoxTotal><S.Frete>Frete :</S.Frete>
        <S.Item>Gratis</S.Item>
        </S.BoxTotal>
        <S.Total>Total</S.Total>
        <h2>R$ {}</h2>
      </S.Wrapper>
    );
  };
  
  export default Cart;