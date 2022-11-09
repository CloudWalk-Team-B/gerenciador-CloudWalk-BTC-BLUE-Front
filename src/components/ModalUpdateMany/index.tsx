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

    // const wb = new Workbook();
    //   wb.xlsx.readFile(file)   
    //   const buffer =  await wb.xlsx.writeBuffer()
    //   console.log(buffer)

      
      // wb.xlsx.readFile(file)
      //       .then(data => {
        //           wb.xlsx.load(data.buffer)
        //               .then()
        //               .catch();
        //       }).catch();
        
        
          const wb = new Workbook();
          const reader = new FileReader()
        
          reader.readAsArrayBuffer(file)
          reader.onload = () => {
            const buffer:any = reader.result;
            wb.xlsx.load(buffer).then(workbook => {
              console.log(workbook, 'workbook instance')
              workbook.eachSheet((sheet, id) => {
                sheet.eachRow((row, rowIndex) => {
                  console.log(row.values, rowIndex)
                })
              })
            })
          }
        

        // Api.post("/product/updateMany")
        // .then(()=>console.log("deu bom"))
        // .catch(()=>console.log("deu ruim"))
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
            <input type="file" onChange={(e) => setFile(e.target.files![0])} />
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
