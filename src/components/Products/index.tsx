import * as S from "./style";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import Moddal from "../ModalProduct";
import { useOpenModal } from "../../contexts/OpenModal";

const ListProducts = () => {
  Modal.setAppElement("#root");

  const [idProduct, setIdProduct] = useState<string>("");

  const { open, setOpen } = useOpenModal();
  
  function openModal(open: boolean) {
    if (open === true) {
      return <Moddal idProduct={idProduct} setOpen={setOpen} />;
    }
  }

  const { products, handleGetProduct } = useProducts();
  console.log(products);

  return (
    <>
      <S.Container>
        <S.ProductsContainer>
          {products.map<React.ReactNode>((element: any, index) => {
            return (
              <S.CardProduct
                key={index}
                className="animate__animated animate__fadeInUp"
                onClick={() => {
                  setIdProduct(element.id);
                  setOpen(true);
                }}
              >
                <S.ImageContainer>
                  <S.Image
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    src={img}
                  />
                </S.ImageContainer>
                <S.TextContainer className="animate__animated animate__zoomIn animate__delay-1s">
                  <S.TitleProduct>{element.name}</S.TitleProduct>
                  <br />
                  <S.PriceProduct>R$: {element.price}</S.PriceProduct>
                </S.TextContainer>
              </S.CardProduct>
            );
          })}
        </S.ProductsContainer>
      </S.Container>
      {openModal(open)}
    </>
  );
};

export default ListProducts;
