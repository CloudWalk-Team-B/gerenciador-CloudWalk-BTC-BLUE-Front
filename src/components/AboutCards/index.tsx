import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";

const ModalUpdate = () => {

  const [file, setFile] = useState<any>();

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);


    await Api.post("/product/updateMany", formData)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
  };

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
            <input type="file" name="file" onChange={(e) => setFile(e.target.files)} />
          </div>
          <button onClick={()=>uploadFile()}>Atualizar</button>
          <button>Download</button>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default ModalUpdate;
