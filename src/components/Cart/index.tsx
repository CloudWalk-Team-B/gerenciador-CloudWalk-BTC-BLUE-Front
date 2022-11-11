import * as S from "./style";
import { BiTrash } from "react-icons/bi";
import CircularProgress from "@mui/material/CircularProgress";
import Logo from "../../assets/images/logoRoxa.png"
import { useCart } from "../../contexts/Cart";
import Api from "../../services/api";
import { toast } from "react-hot-toast";


  const Cart: React.FC = () => {
    const { cart, handleGetCart, price, setPrice } = useCart()
    
    const handleRemoveProduct =  (productId: string, prop:number) =>{
      const data = {
        productId: productId
      }
      Api.post("/Cart/removeItem", data)
        .then(()=>{
          handleGetCart()
          setPrice(price - prop)
        })
        .catch(()=>toast.error("Erro ao remover produto"))
    }
    
    return (
      <S.Wrapper>
        <S.BoxTotal><S.img src={Logo} /> <h2>Sacola</h2></S.BoxTotal>
        {cart.id!=="" && cart.map((element:any) =>{
        return(
            <S.List key={element.id}>
            <S.box>
              <S.img src={element.product.image}/>
              <S.Name>{element.product.name}</S.Name>
              <S.Item>{element.product.price.toFixed(2)}</S.Item>
              <div onClick={()=>handleRemoveProduct(element.id, element.product.price)} id="buttonLogIn"><BiTrash/></div>
              <CircularProgress id="spinLogIn" color="secondary" />
            </S.box>
            </S.List>
          )})
        }
        <S.BoxTotal>
          <S.SubTotal>Subtotal R$: {price.toFixed(2)} </S.SubTotal>           
          <S.Item>{}</S.Item>
        </S.BoxTotal>
        <S.BoxTotal><S.Frete >Frete  {}</S.Frete>
        <S.Item>{price>20?"Grátis":price!==0?"R$: 19,90":""}</S.Item>
        </S.BoxTotal>
        <S.Total>Total</S.Total>
        <h2>R$ {price>20?price.toFixed(2):price>0?(price + 19.90).toFixed(2):(0).toFixed(2)}</h2>
        <button onClick={()=>toast.error("Erro, tente novamente mais tarde.")}>Finalizar compra</button>
      </S.Wrapper>
    );
  };
  
  export default Cart;