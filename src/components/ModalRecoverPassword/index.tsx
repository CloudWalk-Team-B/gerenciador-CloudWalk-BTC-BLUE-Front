import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { EditProduct, Product } from "../../types/interface";
import { toast } from "react-hot-toast";
import { EditPassword } from "../../types/interface";
import "animate.css";
import "./styles.css";

const Moddal = () => {
  const { openRecoveryPassword, setOpenRecoveryPassword } = useHandleModals();
  const [email, setEmail] = useState("");

  function closeModal() {
    setOpenRecoveryPassword(false);
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
      // transition: "all, 0.5s",
    },
  };

  let handlePasswordEdit = () => {
    Api.post("/user/password-recovery", updatePassword)
      .then((res) => closeModal())
      .catch((res) => console.log("🚕🚕🚕🚕", res));
  };

  const updatePassword: EditPassword = {
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
        className="animate__animated animate__jackInTheBox  customStyles"
      >
        <S.Container>
          <S.TitleModal>Recuperação de senha</S.TitleModal>
          <S.InfoProductCard>
            <h1>Por favor, informe seu email:</h1>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handlePasswordEdit}>Alterar</button>
          </S.InfoProductCard>
        </S.Container>
      </Modal>
    </>
  );
};

export default Moddal;
