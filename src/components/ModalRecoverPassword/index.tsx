import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { EditProduct, RecoveryPassword } from "../../types/interface";
import { toast } from "react-hot-toast";
import { EditPassword } from "../../types/interface";
import CircularProgress from "@mui/material/CircularProgress";
import "animate.css";
import "./styles.css";
import Swal from "sweetalert2";
import swal from "sweetalert";

const Moddal = () => {
  const { openRecoveryPassword, setOpenRecoveryPassword } = useHandleModals();
  const [email, setEmail] = useState("");

  function closeModal() {
    setOpenRecoveryPassword(false);
  }

  // let spinComponent = (document.querySelector("#spin")!.style.display =
  //   "block");

  let setPassword = () => {
    closeModal();
    Swal.fire(
      "Email enviado!",
      `Um email com sua nova senha foi enviado para seu email.`,
      "success"
    );
  };

  let errorPassword = (res: any) => {
    document.querySelector<HTMLElement>("#spin")!.style.display = "none";
    document.querySelector<HTMLElement>("#button")!.style.display = "block";

    swal({
      title: "Error",
      text: `${res.message}`,
      icon: "error",
      timer: 6000,
    });
  };

  let handlePasswordEdit = () => {
    document.querySelector<HTMLElement>("#spin")!.style.display = "block";

    document.querySelector<HTMLElement>("#button")!.style.display = "none";

    Api.post("/user/password-recovery", updatePassword)
      .then((res) => setPassword())
      .catch((res) => errorPassword(res));
  };

  const updatePassword: RecoveryPassword = {
    email: email,
  };

  return (
    <>
      <Modal
        isOpen={openRecoveryPassword}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="animate__animated animate__backInDown  customStyles"
      >
        <S.Container>
          <S.TitleModal>Recuperação de senha</S.TitleModal>
          <S.InfoProductCard>
            <h1>Por favor, informe seu email:</h1>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <button id="button" onClick={handlePasswordEdit}>
              Alterar
            </button>
            <CircularProgress id="spin" color="secondary" />
          </S.InfoProductCard>
        </S.Container>
      </Modal>
    </>
  );
};

export default Moddal;
