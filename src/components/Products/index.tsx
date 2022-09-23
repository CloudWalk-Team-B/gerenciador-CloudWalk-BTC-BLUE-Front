import * as S from "./style";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";

const ListProducts = () => {
  const [list, setList] = useState({});
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [idProduct, setIdProduct] = useState(0);

  function openModal(element: any) {
    setIsOpen(true);
    console.log(element.id);
    setIdProduct(element.id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid purple",
    },
  };

  const { products, handleGetProduct } = useProducts();

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
      </S.ProductsContainer>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleModal>Infomações</S.TitleModal>
        <S.InfoProductCard>
          {/* {list.map<React.ReactNode>((element, index) => {
            if (element.id == idProduct) {
              return (
                <>
                  <S.CardImageProduct>
                    <S.ImageProduct src={element.img} />
                  </S.CardImageProduct>
                  <S.InfoProduct>
                    <S.InfoListItem>Nome: {element.name}</S.InfoListItem>
                    <S.InfoListItem>Valor: R${element.valor}.00</S.InfoListItem>
                    <S.InfoListItem>Código: {element.cod}</S.InfoListItem>
                    <S.InfoListItem>
                      Categoria: {element.categoria}
                    </S.InfoListItem>
                    <S.InfoListItem>
                      Disponiivel: {element.disponivel ? "Sim" : "Não"}
                    </S.InfoListItem>
                    ;
                  </S.InfoProduct>
                </>
              );
            }
          })} */}
        </S.InfoProductCard>
      </Modal>
    </S.Container>
  );
};

export default ListProducts;
