import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

const ModdalNewProduct = () => {
  const { openNewProduct, setOpenNewProduct} = useHandleModals();
  const closeModal = () => {
    setOpenNewProduct(false);
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
      height: "60vh",     
      
    },
  };

  // "code": 154,
  // "name": "Peitoral Zee Dog",
  // "image": "Link Image",
  // "description": "Peitoral para cachorros e gatos.",
  // "category": "Peitoral",
  // "price": 8000,
  // "inventory": true

  return (
    <>
      <Modal
        isOpen={openNewProduct}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleComponent>
          Adicionar novo produto
        </S.TitleComponent>
        <S.MainComponent>
            <div>
              <input type="text" placeholder="Código"/>
              <input type="text" placeholder="Nome do Produto"/>
              <input type="text" placeholder="Imagem"/>
              <input type="text" placeholder="Descrição"/>
              <input type="text" placeholder="Preço"/>
              <input type="text" placeholder="sim"/>
              <select onChange={e => handleIsManager(e.target.value)}>
                <option value="adm">Administrador</option>
                <option value="manager">Gerente</option>
              </select>
            </div>
            <button>
              Cadastrar
            </button>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default ModdalNewProduct;
