import * as S from "./style"


const Login = () =>{

    return(
        <S.LoginConstainer>
            <img src="https://img.r7.com/images/maior-roedor-capivara-pode-medir-quase-um-metro-e-meio-de-comprimento-e-pesar-ate-80-quilos-24032022100144867"/>
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
            
        </S.LoginConstainer>
    )
}

export default Login