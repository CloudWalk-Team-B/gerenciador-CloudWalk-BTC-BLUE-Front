import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useOpenModal } from "../../contexts/OpenModal";

const Moddal = (idProduct: any) => {

  const { open, setOpen } = useOpenModal()

  function closeModal() {
    setOpen(false);
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
    <>
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleModal>Infomações</S.TitleModal>
        <S.InfoProductCard>
          {products.map<React.ReactNode>((element, index) => {
            if (element.id == idProduct) {
              return (
                <>
                  <S.CardImageProduct>
                    <S.ImageProduct src={img} />
                  </S.CardImageProduct>
                  <S.InfoProduct>
                    <S.InfoListItem>Nome: {element.name}</S.InfoListItem>
                    <S.InfoListItem>Valor: R${element.price}.00</S.InfoListItem>
                    <S.InfoListItem>Código: {element.code}</S.InfoListItem>
                    <S.InfoListItem>
                      Categoria: {element.category}
                    </S.InfoListItem>
                    <S.InfoListItem>
                      Disponiivel: {element.inventory ? "Sim" : "Não"}
                    </S.InfoListItem>
                    ;
                  </S.InfoProduct>
                </>
              );
            }
          })}
        </S.InfoProductCard>
      </Modal>
    </>
  );
};

export default Moddal;
