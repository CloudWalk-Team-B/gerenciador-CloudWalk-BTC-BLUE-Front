import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { saveAs } from "file-saver"
// import updateMany from "../../assets/files/updateMany.xlsx"

const ModalUpdate = () => {
  // const downloadFile = () => {
  //   saveAs(updateMany, 'exemplo.xlsx')
  // }

  const [file, setFile] = useState<any>()

  const uploadFile = async () =>{
    const formData = new FormData()
    formData.append("file", file)

    const headers ={
      "headers":{
        "Content-Type": "application/json"
      }
    }
    await Api.post("/upload-file", formData, headers)
    .then(()=>console.log("Recebeu"))
    .catch(()=>console.log("Não recebeu"))
  }

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
          Atualização em Massa
        </S.TitleComponent>
        <S.MainComponent>
            <div>
                <input type="file" onChange={e => setFile(e.target.files[0])}/>             
            </div>
            <button onClick={()=>uploadFile()}>
              Atualizar
            </button>
            <button >
              Download
            </button>
        </S.MainComponent>


      </Modal>
    </>
  );
};

export default ModalUpdate;
