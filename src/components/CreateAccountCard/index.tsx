import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import Logo from "../../assets/images/logoRoxa.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Moddal from "../ModalNewUser";
import { useHandleModals } from "../../contexts/HandleModals";
import { useEffect } from "react";
import ModalLoading from "../ModalLoading";
import { EmailConfirmation } from "../ModalEmailConfirmation";
import { useUser } from "../../contexts/User";

interface CreateAccountData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
  isAdmin?: boolean;
  isManager?: boolean;
}

const CreateAccountSchema = yup.object().shape({
  name: yup.string().required("Campo de nome obrigatório"),
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
      "A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula"
    ),
  confirmPassword: yup
    .string()
    .min(8, "Sua confirmação deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
      "A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula"
    ),
  cpf: yup.string().min(11, "Formato de CPF inválido"),
});

const CreateAccountCard = () => {
  const {
    openNewUser,
    setOpenNewUser,
    isAdmManager,
    setIsAdmManager,
    loadModal,
    setLoadModal,
    modalConfirm,
    setModalConfirm,
  } = useHandleModals();

  useEffect(() => setModalConfirm(false), []);

  const LoadingModal = (open: boolean) => {
    const phrase: string = "Enviando email de confirmação...";
    if (open) {
      return <ModalLoading prop={phrase} />;
    }
  };

  const confirmModal = (open: boolean) => {
    if (open) {
      return <EmailConfirmation />;
    }
  };

  const openModal = (open: boolean) => {
    if (open === true) {
      return <Moddal />;
    }
  };

  const openAdmManager = (isAdmManager: string) => {
    if (isAdmManager === "adm") {
      return (
        <p className="newAdmManager isAdmManager">
          Cadastro de Novo Administrador
        </p>
      );
    } else if (isAdmManager === "manager") {
      return (
        <p className="newAdmManager isAdmManager">Cadastro de Novo Gerente</p>
      );
    }
  };

  const { setUser } = useUser();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({
    resolver: yupResolver(CreateAccountSchema),
  });

  const newUser = (data: CreateAccountData) => {
    if (isAdmManager === "") {
      return { ...data, isAdmin: false, isManager: false };
    } else if (isAdmManager === "adm") {
      return { ...data, isAdmin: true, isManager: false };
    } else if (isAdmManager === "manager") {
      return { ...data, isAdmin: true, isManager: true };
    }
  };

  const handleCreateAccount = (data: CreateAccountData) => {
    if (data.password === data.confirmPassword) {
      const newData = newUser(data);
      if (
        data.name !== "" &&
        data.email !== "" &&
        data.password !== "" &&
        data.confirmPassword !== "" &&
        data.cpf !== undefined
      ) {
        document.querySelector<HTMLElement>("#spinNewUser")!.style.display =
          "block";
        document.querySelector<HTMLElement>("#buttonNewUser")!.style.display =
          "none";

        setLoadModal(true);
        return Api.post("/user", newData)
          .then((res) => {
            setLoadModal(false);
            setModalConfirm(true);
            setIsAdmManager("");
            const loginUser = { email: data.email, password: data.password };
            Api.post("auth", loginUser)
              .then((res) => {
                document.querySelector<HTMLElement>(
                  "#spinNewUser"
                )!.style.display = "none";
                document.querySelector<HTMLElement>(
                  "#buttonNewUser"
                )!.style.display = "block";
                setUser(res.data.user);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
              })
              .catch(() => {
                document.querySelector<HTMLElement>(
                  "#spinNewUser"
                )!.style.display = "none";
                document.querySelector<HTMLElement>(
                  "#buttonNewUser"
                )!.style.display = "block";

                toast.error("Erro ao efetuar login");
              });
          })
          .catch(() => {
            document.querySelector<HTMLElement>("#spinNewUser")!.style.display =
              "none";
            document.querySelector<HTMLElement>(
              "#buttonNewUser"
            )!.style.display = "block";
            setLoadModal(false);
            toast.error("Dados inválidos ou usuário já cadastrado");
          });
      } else {
        toast.error("Todos os campos são obrigatórios");
      }
    } else {
      return toast.error("As senhas não conicidem");
    }
  };

  const navegate = useNavigate();

  return (
    <>
      <S.CreateAccountContainer>
        <img
          src={Logo}
          className="animate__animated animate__flip animate__delay-0.5s"
        />
        <h2 className="animate__animated animate__fadeInLeft">
          Registre-se Agora!
        </h2>
        <div className="animate__animated animate__backInUp">
          <p id="title">Cadastro: </p>
          <form onSubmit={handleSubmit(handleCreateAccount)}>
            <input
              type="text"
              placeholder="Nome"
              {...register("name")}
              onBlur={() => clearErrors()}
            />
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
            <input
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword")}
              onBlur={() => clearErrors()}
            />
            <input
              type="number"
              placeholder="CPF"
              {...register("cpf")}
              onBlur={() => clearErrors()}
            />
            {isAdmManager === "" && (
              <p
                className="newAdmManager"
                onClick={() => {
                  setOpenNewUser(true);
                }}
              >
                Novo Colaborador? Clique aqui!
              </p>
            )}
            {openAdmManager(isAdmManager)}
            <div>
              <a
                onClick={() => {
                  setIsAdmManager("");
                  navegate("/login");
                }}
              >
                Voltar
              </a>
              <button type="submit" id="buttonNewUser">
                Cadastrar
              </button>
              <CircularProgress id="spinNewUser" color="secondary" />
              {/* <a onClick={()=>{setOpenNewUser(true)}}>Cadastrar Colaborador</a> */}
            </div>
            {
              <S.ErrorMessage>
                {errors.name?.message ||
                  errors.email?.message ||
                  errors.password?.message ||
                  errors.confirmPassword?.message ||
                  errors.cpf?.message}
              </S.ErrorMessage>
            }
          </form>
        </div>
      </S.CreateAccountContainer>
      {openModal(openNewUser)}
      {confirmModal(modalConfirm)}
      {LoadingModal(loadModal)}
    </>
  );
};

export default CreateAccountCard;
