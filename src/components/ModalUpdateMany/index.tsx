import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useProducts } from "../../contexts/product";
import ModalLoading from "../ModalLoading";
import { saveAs } from "file-saver";
import { Workbook } from "exceljs";
import ExcelJS from "exceljs";
import jsPDF from "jspdf";
import Report from "./report";

import CircularProgress from "@mui/material/CircularProgress";

// const XLSX = require("xlsx");

// import updateMany from "../../assets/fil

const ModalUpdate = () => {
  const { handleGetProduct } = useProducts();
  const { loadModal, setLoadModal } = useHandleModals();

  interface Respostatype {
    id: string;
    userId: string;
    createdAt: string;
    priceAtt: string[];
    priceOld: string[];
    productName: string[];
  }

  const resp: Respostatype = {
    id: "28766107-f37f-4ebd-a9ed-d43fd77bdcae",
    userId: "280b5dd6-fd73-4437-a9c5-085ad70c0a56",
    createdAt: "Wed Nov 09 2022",
    priceAtt: ["15.73", "14.51", "18.15"],
    priceOld: ["14.3", "13.19", "16.5"],
    productName: ["Galinha de Borracha", "Areia higiênica ", "Areia higiênica"],
  };

  const newResp = [
    { id: resp.id },
    { userId: resp.userId },
    { createdAt: resp.createdAt },
    { priceAtt: resp.priceAtt },
    { priceOld: resp.priceOld },
    { productName: resp.productName },
  ];

  const [report, setReport] = useState(newResp);

  //   console.log(newResp)
  //   var wb = XLSX.utils.book_new()
  //   var ws = XLSX.utils.json_to_sheet(newResp);
  //   XLSX.utils.book_append_sheet(wb, ws, "Relatório_Capivara");
  //   XLSX.writeFile(wb, "Relatorio_Capivara.xlsx");

  // const handleReport = () =>{

  //   const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  //   const fileExtension = '.xlsx'

  //   const ws = XLSX.utils.json_to_sheet(newResp)
  //   const wb = { Sheets:{'data':ws}, SheetNames:['data']};
  //   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array'});
  //   const data = new Blob([excelBuffer], { type:fileType});
  //   FileSaver.saveAs(data, "Relatorio_Capivara.xlsx")
  // }
  // const handleReport = async(resp:any) => {
  //   const workbook = new Workbook();
  //   await workbook.xlsx.load(resp.data);

  // await workbook.xlsx.writeFile("C:\\somepath\\some.xlsx")
  // const newWorkbook = createAndFillWorkbook(workbook);
  // await newWorkbook.xlsx.writeFile("Relatorio_Capivara.xlsx")

  // }
  const [data, setData] = useState();
  const [file, setFile] = useState<any>();

  const handleImport = async () => {
    var data = new FormData();
    let input = document.querySelector("#arquivo") as HTMLInputElement;

    document.querySelector<HTMLElement>("#spinMany")!.style.display = "block";

    document.querySelector<HTMLElement>("#buttonMany")!.style.display = "none";

    data.append("file", input.files![0]);
    // setLoadModal(true)
    Api.post("/product/updateMany", data)
      .then(async function (res: any) {
        // setLoadModal(false)
        console.log("🏖🏖🏖🏖🏖", res);

        setData(res);

        // const newBook = XLSX.utils.book_new();
        // const newSheet = XLSX.utils.json_to_sheet();

        // const doc = new jsPDF();

        // doc.html("./isso.html");
        // doc.save("report.pdf");

        toast.success("Produtos atualizados com sucesso!");
        setTimeout(() => {
          window.print();
          closeModal();
        }, 2000);
        handleGetProduct();
      })
      .catch(function (err) {
        document.querySelector<HTMLElement>("#spinMany")!.style.display =
          "none";

        document.querySelector<HTMLElement>("#buttonMany")!.style.display =
          "block";
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
      // border: "1px solid purple",
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
        <S.Container>
          <div id="full">
            <S.TitleComponent>Atualização em Massa</S.TitleComponent>
            <S.MainComponent>
              <div>
                <input type="file" id="arquivo" />
              </div>
              <button id="buttonMany" onClick={() => handleImport()}>
                Atualizar
              </button>
              <CircularProgress id="spinMany" color="secondary" />
              {/* <button>Download</button> */}
            </S.MainComponent>
          </div>
        </S.Container>
        <Report props={data} />
      </Modal>
      {/* <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"
        integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/"
      ></script> */}
    </>
  );
};

export default ModalUpdate;
