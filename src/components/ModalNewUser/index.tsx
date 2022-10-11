import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";

const Moddal = () => {
  const { openNewUser, setOpenNewUser } = useHandleModals();

  function closeModal() {
    setOpenNewUser(false);
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

  return (
    <>
      <Modal
        isOpen={openNewUser}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleModal>Modal de cadastro aqui</S.TitleModal>
      </Modal>
    </>
  );
};

export default Moddal;
