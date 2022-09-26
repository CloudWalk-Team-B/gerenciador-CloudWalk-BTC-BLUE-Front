import React from "react";
import * as S from "./style";
import FooterLogged from "../../components/FooterLogged";
import ListProducts from "../../components/Products/index";

const Products = () => {
  return (
    <>
      <S.Content>
        <FooterLogged header={"add"} />
        <ListProducts />
      </S.Content>
    </>
  );
};

export default Products;
