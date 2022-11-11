import React from "react";
import * as S from "./style";
import ListProducts from "../../components/Products/index";
import Header from "../../components/HeaderLogged copy";

const Products = () => {
  return (
    <>
      <S.Content>
        <Header/>
        <ListProducts />
      </S.Content>
    </>
  );
};

export default Products;
