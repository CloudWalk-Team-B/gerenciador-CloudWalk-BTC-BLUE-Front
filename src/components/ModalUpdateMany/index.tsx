import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";

import { Workbook } from 'exceljs';
import Api from "../../services/api";

const ModalUpdate = () => {


  const [file, setFile] = useState<any>();

  const uploadFile = () => {

    const wb = new Workbook();

  }

  const handleImport = async() =>{

    var data = new FormData();

    let input = document.querySelector("#arquivo") as HTMLInputElement;

    data.append('file', input.files![0]);

      Api.post('/product/updateMany', data)
    .then(function (res) {
        console.log(res); //Resposta HTTP
    })
    .catch(function (err) {
        console.log(err); //Erro HTTP
    });
  }

  const { openUpdate, setOpenUpdate } = useHandleModals();

  const closeModal = () => {
    setOpenUpdate(false);
  };

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
        <S.TitleComponent>Atualização em Massa</S.TitleComponent>
        <S.MainComponent>
          <div>
            <input type="file" id="arquivo" onChange={(e) => setFile(e.target.files![0])} />
          </div>
          <div className="bothButtons">
            <button onClick={() => handleImport()}>Atualizar</button>
            <button>Download</button>
          </div>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default ModalUpdate;
