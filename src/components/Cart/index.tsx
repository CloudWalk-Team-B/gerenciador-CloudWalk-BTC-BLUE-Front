import * as S from "./style";
import { BiTrash } from "react-icons/bi";
import { useCart } from "../../contexts/Cart/useCart";
import { Product } from "../../types/interface";
import Logo from "../../assets/images/logoRoxa.png"

  const Cart: React.FC = () => {
    const {cart,removeProduct,Total} = useCart()  
    function handleRemoveProduct(productId: string) {
      removeProduct(productId);
    }
    
    return (
      <S.Wrapper>
        <S.BoxTotal><S.img src={Logo} /> <h2>Cart</h2></S.BoxTotal>
        {
          cart.map((value) =>(
            <S.List>
              
            <S.box>
              <S.img src={value.image}/>
              <S.Name>{value.name}</S.Name>
              <S.Item>{value.price}</S.Item>
              <div onClick={()=>handleRemoveProduct(value.id)}><BiTrash/></div>
            </S.box>
            </S.List>
          ))
        }
        <S.BoxTotal>
          <S.SubTotal>Subtotal :</S.SubTotal>           
          <S.Item>{Total}</S.Item>
        </S.BoxTotal>
        <S.BoxTotal><S.Frete>Frete :</S.Frete>
        <S.Item>Grátis</S.Item>
        </S.BoxTotal>
        <S.Total>Total</S.Total>
        <h2>R$ {Total}</h2>
      </S.Wrapper>
    );
  };
  
  export default Cart;