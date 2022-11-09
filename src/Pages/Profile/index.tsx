import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/images/logoBranca.png";
import ProfilePic from "../../assets/images/pic2.jpg";
import Swal from "sweetalert2";
import { EditProduct, User } from "../../types/interface";
import Api from "../../services/api";
import { useHandleModals } from "../../contexts/HandleModals";
import ModdalPassword from "../../components/ModalUpdatePassword";
import ModdalProfile from "../../components/ModalUpdateProfile";
import { useNavigate } from "react-router-dom";

const Profilee = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");

  const { openEditPassword, setOpenEditPassword } = useHandleModals();
  const { openEditProfile, setOpenEditProfile } = useHandleModals();

  const navigate = useNavigate();

  const openEditPasswordModal = (open: boolean) => {
    if (open === true) {
      return <ModdalPassword />;
    }
  };

  const openEditProfileModal = (open: boolean) => {
    if (open === true) {
      return <ModdalProfile />;
    }
  };

  return (
    <>
      <S.Container>
        <header className="animate__animated animate__jackInTheBox">
          <img src={Logo} />
          <h1>Capivara Shop</h1>
        </header>
        <S.ImageProfile className="animate__animated animate__flipInX">
          <img src={ProfilePic} />
        </S.ImageProfile>
        <S.InfoProfile className="animate__animated animate__flipInX">
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Cpf: {user.cpf}</p>
          {user.isAdmin || user.isManager ? (
            <p>{user.isAdmin ? "Cargo: Admin" : "Cargo: Gerente"}</p>
          ) : (
            ""
          )}
        </S.InfoProfile>
        <S.ButtonEditProfiles>
          <button
            className="animate__animated animate__flipInX"
            onClick={() => setOpenEditPassword(true)}
          >
            Alterar senha
          </button>
          <button
            className="animate__animated animate__flipInX"
            onClick={() => setOpenEditProfile(true)}
          >
            Alterar Perfil
          </button>
          <br />
          <button
            className="animate__animated animate__flipInX"
            onClick={() => navigate("/produtos")}
          >
            Voltar
          </button>
        </S.ButtonEditProfiles>
      </S.Container>
      {openEditPasswordModal(openEditPassword)}
      {openEditProfileModal(openEditProfile)}
    </>
  );
};

export default Profilee;
