import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import Logo from "../../assets/images/logoRoxa.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import { User } from "../../types/interface";
import { useNavigate } from "react-router-dom";
import Moddal from "../ModalNewUser";;
import { EmailConfirmation } from "../ModalEmailConfirmation";

import { useHandleModals } from "../../contexts/HandleModals";
import { useUser } from "../../contexts/User";

interface CreateAccountData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
  isAdmin?: boolean;
  isManager?:boolean;
}

const CreateAccountSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo de nome obrigatório"),
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
  cpf: yup
    .string()
    .min(11, "Formato de CPF inválido")
});


const CreateAccountCard = ()=>{

  const { openNewUser, setOpenNewUser, isAdmManager, setIsAdmManager } = useHandleModals();
  const { modalConfirm, setModalConfirm } = useHandleModals()

  const confirmModal = (open: boolean) =>{
    if (open) {
      return <EmailConfirmation/>;
    }
  }

  const openModal = (open: boolean) => {
    if (open) {
      return <Moddal/>;
    }
  }

  const openAdmManager = (isAdmManager: string) => {
    if(isAdmManager === "adm"){
      return <p className="newAdmManager isAdmManager">Cadastro de Novo Administrador</p>
    }else if(isAdmManager === "manager"){
      return <p className="newAdmManager isAdmManager">Cadastro de Novo Gerente</p>
    }
  }


  const { login } = useAuth();
  const { setUser } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({ resolver: yupResolver(CreateAccountSchema) });

  const newUser = (data:CreateAccountData) =>{
    if(isAdmManager === ""){
      return {...data, isAdmin:false, isManager:false}
    }else if(isAdmManager === "adm"){
      return {...data, isAdmin:true, isManager:false}
    }else if(isAdmManager === "manager"){
      return {...data, isAdmin:true, isManager:true}
    }
  }

  const handleCreateAccount = (data: CreateAccountData) => {
    if(data.password === data.confirmPassword){
      const newData = newUser(data)
        if (data.name !== "" && data.email !== "" && data.password !== "" && data.confirmPassword !== "" && data.cpf !== undefined) {
          return Api.post("/user", newData)
          .then((res) => {
                  setModalConfirm(true)
                  setIsAdmManager("")
                  const loginUser = {email: data.email, password: data.password}
                  Api.post('auth', loginUser)
                    .then((res) => {
                      setUser(res.data.user)
                      localStorage.setItem("token", res.data.token)
                      localStorage.setItem("user", JSON.stringify(res.data.user))
                    })
                    .catch(()=>{
                      toast.error("Erro ao efetuar login")
                    })
            })
            .catch(() => toast.error("Dados inválidos ou usuário já cadastrado"));
        } else {

          toast.error("Todos os campos são obrigatórios");
        }
    }else{
      return toast.error("As senhas não conicidem")
    }
  }

  const navegate= useNavigate()

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
        <p>Cadastro: </p>
        <form onSubmit={handleSubmit(handleCreateAccount)}>
          <input
            type="text"
            placeholder="Nome"
            {...register("name")}
            onBlur={()=>clearErrors()}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            onBlur={()=>clearErrors()}
          />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            onBlur={()=>clearErrors()}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
            onBlur={()=>clearErrors()}
          />
          <input
            type="number"
            placeholder="CPF"
            {...register("cpf")}
            onBlur={()=>clearErrors()}
          />
          {isAdmManager === "" && <p className="newAdmManager" onClick={()=>{setOpenNewUser(true)}}>Novo Colaborador? Clique aqui!</p>}
          {openAdmManager(isAdmManager)}
          <div>
            <a onClick={() => {
              setIsAdmManager("")
              navegate("/login")
              }}>Voltar</a>
            <button type="submit" onClick={()=>{console.log("aqui")}}>Cadastrar</button>
            {/* <a onClick={()=>{setOpenNewUser(true)}}>Cadastrar Colaborador</a> */}
          </div>
        {
          <S.ErrorMessage>
            {
              errors.name?.message || errors.email?.message
              || errors.password?.message || errors.confirmPassword?.message
              || errors.cpf?.message
            }
          </S.ErrorMessage>
        }
        </form>
      </div>
    </S.CreateAccountContainer>
    {openModal(openNewUser)}
    {confirmModal(modalConfirm)}
    </>
  );
};

export default CreateAccountCard;
