import React from "react";
import * as S from "./style";
import HeaderLogged from "../../components/HeaderLogged";
import ListProducts from "../../components/Products/index";

const Products = () => {
  return (
    <>
      <S.Content>
        <HeaderLogged header="add" />
        <ListProducts />
      </S.Content>
    </>
  );
};

export default Products;
