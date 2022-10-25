import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

const ModalUpdate = () => {
  const { openUpdate, setOpenUpdate } = useHandleModals();

  const closeModal = () => {
    setOpenUpdate(false);
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
      height: "45vh",     
    },
  };

  return (
    <>
      <Modal
        isOpen={openUpdate}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleComponent>
          Verificação da chave de segurança
        </S.TitleComponent>
        <S.MainComponent>
            <div>
              <input type="password" placeholder="Chave de segurança"/>
              <select >
                <option value="adm">Administrador</option>
                <option value="manager">Gerente</option>
              </select>
            </div>
            <button >
              Verificar
            </button>
        </S.MainComponent>


      </Modal>
    </>
  );
};

export default ModalUpdate;
