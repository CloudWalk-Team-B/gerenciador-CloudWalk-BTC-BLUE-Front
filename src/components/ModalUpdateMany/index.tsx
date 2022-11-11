import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { saveAs } from "file-saver";
import { Workbook } from "exceljs";
import ExcelJS from "exceljs";
// import updateMany from "../../assets/files/updateMany.xlsx"

const ModalUpdate = () => {
  // const downloadFile = () => {
  //   saveAs(updateMany, 'exemplo.xlsx')
  // }

  const [file, setFile] = useState<any>();

  const handleImport = async () => {
    var data = new FormData();
    let input = document.querySelector("#arquivo") as HTMLInputElement;
    data.append("file", input.files![0]);
    // setLoadModal(true)
    Api.post("/product/updateMany", data)
      .then(async function (res) {
        // setLoadModal(false)
        console.log(res.data);

        // const workbook = new Workbook();
        // let workbook = xlsx.read(file.buffer);
        // const test = await workbook.xlsx.writeFile("filename");
        const workbook = createAndFillWorkbook();

        toast.success("Produtos atualizados com sucesso!");
        closeModal();
        // handleGetProduct()
      })
      .catch(function (err) {
        // setLoadModal(false)
        console.log(err);
        toast.error("Falha ao atualizar valores por tabela");
      });
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
            <input type="file" id="arquivo" />
          </div>
          <button onClick={() => handleImport()}>Atualizar</button>
          <button>Download</button>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default ModalUpdate;
