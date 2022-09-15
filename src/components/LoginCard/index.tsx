import * as S from "./style"
import Logo from "../../assets/images/logoBege.png"
import toast from "react-hot-toast"

interface LoginData{
    email:string,
    password:string
}

const LoginCard = ()=>{
    return(
        <S.LoginCardContainer>
            <img src={Logo}/>
            <h2>Bem vindo ao Capivara Pet</h2>
            <div>
                <p>Login</p>
                    <form action="">
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <p>Esqueceu a senha?</p>
                        <button>Entrar</button>
                    </form>
            </div>
        </S.LoginCardContainer>
    )
}

export default LoginCard
