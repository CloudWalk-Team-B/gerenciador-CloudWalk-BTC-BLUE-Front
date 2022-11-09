import React, {Component, useEffect} from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Api from '../../services/api'
import Logo from "../../assets/images/logoRoxa.png";
import * as S from "./style"



const AuthPage =() =>{
    
    const { param } = useParams();
    const { login } = useAuth()
    const navegate = useNavigate()
    
    const validateAccount = () => {
        const value = param;

        Api.get(`/user/auth-user/${value}`)
            .then(()=>{
                const user = JSON.parse(localStorage.getItem("user") || "")
                const token = localStorage.getItem("token");
                if(token){
                    Api.get(`/user/${user.id}`)
                        .then((res)=>{
                            login({token:token, user: res.data})
                        })
                        .catch(()=>{
                            navegate("/login");
                            toast.success("Confirmação bem sucedida! Faça seu login.")
                        })
                }else{
                    navegate("/login");
                    toast.success("Confirmação bem sucedida! Faça seu login.")
                }
            })
            .catch(()=>{
                toast.error("Conta já validada ou inexistente");
                navegate("/login");
            })
    }

    useEffect(()=>{
        validateAccount();
    },[])
    

return(
    <S.AuthContainer>
        <img src={Logo} alt="Logo Capivara" />
        <p>Aguarde enquanto validarmos sua conta. Assim que concluído você será redirecionado...</p>
    </S.AuthContainer>
)

}

export default AuthPage