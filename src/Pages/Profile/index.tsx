import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/images/logoBranca.png";
import ProfilePic from "../../assets/images/pic2.jpg";
import Swal from "sweetalert2";
import { EditProduct, User } from "../../types/interface";
import Api from "../../services/api";

const Profilee = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");

  const [cpf, setCpf] = useState(user.cpf);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [isManager, setIsManager] = useState(user.isManager);
  const [name, setName] = useState(user.name);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  let passwordEdit = (password: string) => {
    setNewPassword(password);
    setNewPasswordConfirm(password);
  };

  const updatedUser: User = {
    name: name,
    email: email,
    password: newPassword,
    confirmPassword: newPasswordConfirm,
    cpf: cpf,
    isAdmin: isAdmin,
    isManager: isManager,
  };

  let editPassword = () => {
    console.log("foi");

    Swal.fire({
      title: "Insira sua nova senha:",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      color: "#601A4A",
      showCancelButton: true,
      confirmButtonText: "Alterar",
      showLoaderOnConfirm: true,
      preConfirm: (password) => {
        return (
          passwordEdit(password),
          Api.patch(`/user/my-account/update`, updatedUser)
            .then((res) => {
              console.log("🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗", res);
            })
            .catch((res) => {
              console.log("🚕🚕🚕🚕🚕🚕🚕🚕🚕🚕🚕", res);
            })
        );
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: `Senha atualizada com sucesso`,
          // imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  return (
    <S.Container>
      <header>
        <img src={Logo} />
        <h1>Capivara Shop</h1>
      </header>
      <S.ImageProfile>
        <img src={ProfilePic} />
      </S.ImageProfile>
      <S.InfoProfile>
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
        <button onClick={editPassword}>Alterar senha</button>
        <button>Alterar Perfil</button>
      </S.ButtonEditProfiles>
    </S.Container>
  );
};

export default Profilee;
