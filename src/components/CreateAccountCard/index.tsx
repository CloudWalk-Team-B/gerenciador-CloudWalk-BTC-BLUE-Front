import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import Logo from "../../assets/images/logoRoxa.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style";
import { RegisterUser, User } from "../../types/interface";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { RegisterService } from "../../services/authService";
import swal from "sweetalert";

interface CreateAccountData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: number;
}

const CreateAccountSchema = yup.object().shape({
  name: yup.string().required("Campo de nome obrigatório"),
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

const CreateAccountCard = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({
    resolver: yupResolver(CreateAccountSchema),
  });

  const navegate = useNavigate();

  let registerColab = () => {
    Swal.fire({
      title: "Cadastro de Colaborador",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      html: `<input type="password" id="login" class="swal2-input" placeholder="Senha">
    <select id="options" name="cars" id="login" class="swal2-input" >
    <option value="colaber">Colaborador</option>
    <option value="adm">Administrador</option>
      `,
      confirmButtonText: "Cadastrar",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const options = Swal.getPopup().querySelector("#options").value;
        if (!login) {
          Swal.showValidationMessage(`Por favor, Prencha todos campos!`);
        }
        return { login: login, options: options };
      },
    }).then((result) => {
      Swal.fire(
        `
        Senha: ${result.value.login}
        Role: ${result.value.options}
      `.trim()
      );
    });
  };

  const [values, setValues] = useState<RegisterUser>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    isAdmin: false,
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: RegisterUser) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await RegisterService.Register(values);

    if (!response) {
      swal({
        title: "Erro de Cadastro",
        text: "Informações incorretas!",
        icon: "error",
        timer: 6000,
      });
    }

    if (response) {
      Swal.fire({
        icon: "success",
        title: "Usuario cadastrado com sucesso!!",
        width: "300px",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
  };

  return (
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
        <form onSubmit={handleRegisterUser}>
          <input
            type="text"
            placeholder="Nome"
            name="name"
            onChange={handleChangesValues}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChangesValues}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            onChange={handleChangesValues}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            name="confirmPassword"
            onChange={handleChangesValues}
          />
          <input
            type="number"
            placeholder="CPF"
            name="cpf"
            onChange={handleChangesValues}
          />
          <div>
            <button type="submit">Registre</button>
            <a onClick={() => navegate("/login")}>Voltar</a>
            <a onClick={registerColab}>Colaborador</a>
          </div>
        </form>
        {
          <S.ErrorMessage>
            {errors.email?.message || errors.password?.message}
          </S.ErrorMessage>
        }
      </div>
    </S.CreateAccountContainer>
  );
};

export default CreateAccountCard;
