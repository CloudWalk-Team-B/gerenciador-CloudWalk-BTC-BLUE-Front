import React from "react";
import * as S from "./style";
import HeaderLogged from "../../components/HeaderLogged";
import ListProducts from "../../components/Products/index";
import Header from "../../components/Header";

const Products = () => {
  return (
    <>
      <S.Content>
        <Header />
        <ListProducts />
      </S.Content>
    </>
  );
};

export default Products;
