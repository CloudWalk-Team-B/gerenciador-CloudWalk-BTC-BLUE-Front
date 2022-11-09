import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { EditProduct, User } from "../../types/interface";
import { toast } from "react-hot-toast";
import { EditPassword } from "../../types/interface";
import CircularProgress from "@mui/material/CircularProgress";
import "animate.css";
import "./styles.css";
import Swal from "sweetalert2";
import swal from "sweetalert";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Moddal = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");

  const { openEditPassword, setOpenEditPassword } = useHandleModals();
  const [cpf, setCpf] = useState(user.cpf);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [isManager, setIsManager] = useState(user.isManager);
  const [name, setName] = useState(user.name);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [isAuth, setIsAuth] = useState(true);

  function closeModal() {
    setOpenEditPassword(false);
  }

  // let spinComponent = (document.querySelector("#spin")!.style.display =
  //   "block");

  let confirmPassword = () => {
    closeModal();
    Swal.fire(
      "Senha redefinida!",
      `Sua senha foi redefinida com sucesso !!.`,
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

    Api.patch("/user/my-account/update", updatedUser)
      .then((res) => confirmPassword())
      .catch((res) => errorPassword(res));
  };

  const updatedUser: User = {
    name: name,
    email: email,
    password: newPassword,
    confirmPassword: newPasswordConfirm,
    cpf: cpf,
    isAdmin: isAdmin,
    isManager: isManager,
    isAuth: isAuth,
  };

  let handleTypeInput = () => {
    let input = document.querySelector("#inputPassword") as HTMLInputElement;

    if (input.type === "password") {
      input.type = "string";
    } else input.type = "password";
  };

  return (
    <>
      <Modal
        isOpen={openEditPassword}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="animate__animated animate__backInDown  customStyles"
      >
        <S.Container>
          <S.TitleModal>Alterar Senha</S.TitleModal>
          <S.InfoProductCard>
            <h1>Por favor, informe sua nova senha::</h1>
            <S.InputContent>
              <input
                type="password"
                id="inputPassword"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setNewPasswordConfirm(e.target.value);
                }}
              />
              <AiOutlineEye
                id="eyeOpen"
                size={40}
                color={"#601A4A"}
                onClick={handleTypeInput}
                className={"eyePassword"}
              />
              <AiOutlineEyeInvisible
                id="eyeClose"
                size={40}
                color={"#601A4A"}
                onClick={handleTypeInput}
                className={"eyePasswordClose"}
                display={"none"}
              />
            </S.InputContent>
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
