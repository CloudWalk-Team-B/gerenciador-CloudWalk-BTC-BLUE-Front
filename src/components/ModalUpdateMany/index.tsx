import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import * as FileSaver from "file-saver"
import XLSX from "sheetjs-style"
import { useProducts } from "../../contexts/product";
import ModalLoading from "../ModalLoading";
// import XLSX from "xlsx"

const ModalUpdate = () => {

  const { handleGetProduct } = useProducts()
  const { loadModal, setLoadModal } = useHandleModals()
 
  interface Respostatype {
    id:string,
    userId: string,
    createdAt: string,
    priceAtt: string[],
    priceOld: string[],
    productName: string[]
  }

  const resp:Respostatype = {
    id: '28766107-f37f-4ebd-a9ed-d43fd77bdcae',
    userId: '280b5dd6-fd73-4437-a9c5-085ad70c0a56',
    createdAt: 'Wed Nov 09 2022',
    priceAtt: [ '15.73', '14.51', '18.15' ],
    priceOld: [ '14.3', '13.19', '16.5' ],
    productName: [ 'Galinha de Borracha', 'Areia higiênica ', 'Areia higiênica' ]
  }

  const newResp = [
    {id: resp.id},
    {userId: resp.userId},
    {createdAt: resp.createdAt},
    {priceAtt: resp.priceAtt},
    {priceOld: resp.priceOld},
    {productName: resp.productName}
]

  const [ report, setReport ] = useState(newResp)


  // const handleReport = () =>{
  //   console.log(newResp)
  //   var wb = XLSX.utils.book_new()
  //   var ws = XLSX.utils.json_to_sheet(newResp);
  //   XLSX.utils.book_append_sheet(wb, ws, "Relatório_Capivara");
  //   XLSX.writeFile(wb, "Relatorio_Capivara.xlsx");

  //   const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  //   const fileExtension = '.xlsx'

  //   const ws = XLSX.utils.json_to_sheet(newResp)
  //   const wb = { Sheets:{'data':ws}, SheetNames:['data']};
  //   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array'});
  //   const data = new Blob([excelBuffer], { type:fileType});
  //   FileSaver.saveAs(data, "Relatorio_Capivara.xlsx")
  // }

  
  
  const handleImport = async() =>{
    var data = new FormData();
    let input = document.querySelector("#arquivo") as HTMLInputElement;
    data.append('file', input.files![0]);
    setLoadModal(true)
      Api.post('/product/updateMany', data)
    .then(function (res) {
        setLoadModal(false)
        console.log(res.data);
        toast.success("Produtos atualizados com sucesso!")
        closeModal()
        handleGetProduct()
        
    })
    .catch(function (err) {
        setLoadModal(false)
        console.log(err);
        toast.error("Falha ao atualizar valores por tabela")
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
            <input type="file" id="arquivo" />
          </div>
          <div className="bothButtons">
            <button onClick={() => handleImport()}>Atualizar</button>
            <button onClick={()=> {}}>Baixar relatório</button>
          </div>
        </S.MainComponent>
      </Modal>
      {loadModal&& <ModalLoading prop={"Aguarde enquanto os valores são atualizados..."}/>}
    </>
  );
};

export default ModalUpdate;
