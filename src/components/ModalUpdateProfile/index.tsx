import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { EditProduct, UpdateUser } from "../../types/interface";
import { toast } from "react-hot-toast";
import { EditPassword } from "../../types/interface";
import CircularProgress from "@mui/material/CircularProgress";
import "animate.css";
import "./styles.css";
import Swal from "sweetalert2";
import swal from "sweetalert";

import { useAuth } from "../../contexts/auth";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Moddal = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");

  const { openEditProfile, setOpenEditProfile } = useHandleModals();
  const [cpf, setCpf] = useState(`${user.cpf}`);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [isManager, setIsManager] = useState(user.isManager);
  const [name, setName] = useState(user.name);
  const [isAuth, setIsAuth] = useState(true);

  // console.log(user);

  function closeModal() {
    setOpenEditProfile(false);
  }

  const { logout } = useAuth();
  // let spinComponent = (document.querySelector("#spin")!.style.display =
  //   "block");

  let confirmPassword = () => {
    closeModal();
    logout();
    Swal.fire("Perfil Atualizado!", `Por favor logue novamente!.`, "success");
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

  let handleProfileEdit = () => {
    document.querySelector<HTMLElement>("#spin")!.style.display = "block";

    document.querySelector<HTMLElement>("#button")!.style.display = "none";

    console.log(updatedUser);

    Api.patch("/user/my-account/update", updatedUser)
      .then((res) => confirmPassword())
      .catch((res) => errorPassword(res));
  };

  const updatedUser: UpdateUser = {
    name: name,
    email: email,
    cpf: cpf,
    isAdmin: isAdmin,
    isManager: isManager,
    isAuth: isAuth,
  };

  return (
    <>
      <Modal
        isOpen={openEditProfile}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="animate__animated animate__backInDown  customStyles"
      >
        <S.Container>
          <S.TitleModal>Alterar Perfil</S.TitleModal>
          <S.InfoProductCard>
            <h1>Por favor, Altere sus informa????es:</h1>
            <S.InputContent>
              <div>
                <label>Nome:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label>Cpf: </label>
                <input
                  type="number"
                  onChange={(e) => setCpf(e.target.value.toString())}
                />
              </div>
            </S.InputContent>
            <button id="button" onClick={handleProfileEdit}>
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
