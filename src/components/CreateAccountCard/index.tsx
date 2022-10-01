import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import Logo from "../../assets/images/logoRoxa.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style"
import { User } from "../../types/interface";
import { useNavigate } from "react-router-dom";

interface CreateAccountData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: number;

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
      .min(8, "Sua senha tem no mínimo 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
        "A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula"
      ),
    confirmPassword: yup
      .string()
      .min(8, "Sua confirmação deve ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/,
        "A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula"
      ),
    cpf: yup
      .number()
      .min(11, "Formato de CPF inválido")
      .positive("Formato de CPF inválido")
      .integer("Formato de CPF inválido"),
  });
 

const CreateAccountCard = ()=>{

    const { login } = useAuth();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      clearErrors,
    } = useForm<CreateAccountData>({ resolver: yupResolver(CreateAccountSchema) });
  
    const handleCreateAccount = (data: CreateAccountData) => {
      if(data.password === data.confirmPassword){
        const object :User = {...data, isAdmin:false}
          if (data.name !== "" && data.email !== "" && data.password !== "" && data.confirmPassword !== "" && data.cpf !== undefined) {
            return Api.post("/user", data)
              .then((res) => {
                login({ token: res.data.token, user: res.data.user });
              })
              .catch(() => toast.error("Senha ou email inválidos"));
          } else {
            toast.error("Insira usuário e senha");
          }
      }else{
        return toast.error("As senhas não conicidem")
      }
    }

    const navegate= useNavigate()

    return (
        <S.CreateAccountContainer>
          <img
            src={Logo}
            className="animate__animated animate__flip animate__delay-0.5s"
          />
          <h2 className="animate__animated animate__fadeInLeft">
            Cadastre-se
          </h2>
          <p>É rápido e fácil </p>
          <div className="animate__animated animate__backInUp">
            <form onSubmit={()=>toast.error("Recurso em desenvolvimento")}>
              <input type="text" placeholder="Nome" {...register("name")} />
              <input type="text" placeholder="Email" {...register("email")} />                   
              <input type="password" placeholder="Senha" {...register("password")}/>            
              <input type="password" placeholder="Confirmar Senha" {...register("confirmPassword")}/>      
              <input type="number" placeholder="CPF" {...register("cpf")}/>
              <div>
                <p className="backButton" onClick={()=>navegate("/login")}> Voltar</p>
                <button type="submit">Cadastrar</button>
                <p className="collaborator" onClick={()=>toast.error("Modal em desenvolvimento")}>Cadastrar Colaborador</p>
              </div>

            </form>
            {
          <S.ErrorMessage>
            {errors.name?.message || errors.email?.message || errors.password?.message
             || errors.confirmPassword?.message || errors.cpf?.message}
          </S.ErrorMessage>
        }
          </div>
        </S.CreateAccountContainer>
      );
}

// handleSubmit(handleCreateAccount)

export default CreateAccountCard;
