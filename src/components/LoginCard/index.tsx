import * as S from "./style";
import Logo from "../../assets/images/logoRoxa.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/User";
import Swal from "sweetalert2";

import Moddal from "../ModalRecoverPassword";
import { useHandleModals } from "../../contexts/HandleModals";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email obrigatório"),
  password: yup.string().min(8, "Sua senha tem no mínimo 8 caracteres"),
  // .matches(
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
  //   "A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula"
  // ),
});

const LoginCard = () => {
  const { setUser } = useUser();
  const { openRecoveryPassword, setOpenRecoveryPassword } = useHandleModals();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });
  const { login } = useAuth();

  const handleLogin = (data: LoginData) => {
    if (data.email !== "" && data.password !== "") {
      return Api.post("/auth", data)
        .then((res) => {
          login({ token: res.data.token, user: res.data.user });
          setUser(res.data.user);
        })
        .catch(() => toast.error("Senha ou email inválidos"));
    } else {
      toast.error("Insira usuário e senha");
    }
  };

  const navegate = useNavigate();

  // let convertEmail = (email: string) => {
  //   setEmail(email);
  // };

  const openPasswordModal = (open: boolean) => {
    if (open === true) {
      return <Moddal />;
    }
  };

  return (
    <>
      <S.LoginCardContainer>
        <img
          src={Logo}
          className="animate__animated animate__flip animate__delay-0.5s"
        />
        <h2 className="animate__animated animate__fadeInLeft">
          Bem vindo(a) ao Capivara Pets
        </h2>
        <div className="animate__animated animate__backInUp">
          <p>Login </p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              onBlur={() => clearErrors()}
            />
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
              onBlur={() => clearErrors()}
            />
            <div>
              <p
                onClick={() => {
                  setOpenRecoveryPassword(true);
                }}
              >
                Esqueceu a senha?
              </p>
              <p onClick={() => navegate("/cadastro")}>Cadastre-se</p>
            </div>
            <button type="submit">Entrar</button>
          </form>
          {
            <S.ErrorMessage>
              {errors.email?.message || errors.password?.message}
            </S.ErrorMessage>
          }
        </div>
      </S.LoginCardContainer>
      {openPasswordModal(openRecoveryPassword)}
    </>
  );
};

export default LoginCard;
