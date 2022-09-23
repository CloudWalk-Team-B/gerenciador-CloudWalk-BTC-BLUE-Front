import * as S from "./style";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import Moddal from "../Modal";

const ListProducts = () => {
  const [list, setList] = useState({});
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [idProduct, setIdProduct] = useState<string>("");

  function openModal(element: any) {
    setIsOpen(true);
    console.log(element.id);
    setIdProduct(element.id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { products, handleGetProduct } = useProducts();
  console.log(products);

  return (
    <S.Container>
      <S.ProductsContainer>
        {products.map<React.ReactNode>((element, index) => {
          return (
            <S.CardProduct
              key={index}
              className="animate__animated animate__fadeInUp"
              onClick={() => openModal(element)}
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
        <Moddal idProduct={idProduct} />
      </S.ProductsContainer>
    </S.Container>
  );
};

export default ListProducts;
