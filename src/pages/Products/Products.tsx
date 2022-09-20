import * as S from "./style";
import FooterLogged from "../../components/FooterLogged";
import ListProducts from "../../components/Products/index";

const Products = () => {
  return (
    <>
      <S.Content>
        <FooterLogged />
        <ListProducts />
      </S.Content>
    </>
  );
};

export default Products;
