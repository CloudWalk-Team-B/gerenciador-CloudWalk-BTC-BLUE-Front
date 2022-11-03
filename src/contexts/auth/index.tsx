import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { User } from "../../types/interface";

interface AuthProviderProps {
    children: ReactNode;
}

interface LoginParams {
    token:string;
    user:User
}

interface AuthProviderData{
    logged: boolean;
    isAdm: boolean;
    login: (params:LoginParams)=> void;
    logout: ()=> void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }:AuthProviderProps) =>{

    const navegate= useNavigate()
    const [logged, setLogged] = useState<boolean>(false);
    const [ isAdm, setIsAdm ] = useState<boolean>(false)

    const checkTokenExpiration = () =>{
        const user = JSON.parse(localStorage.getItem("user") || "")
        const token = localStorage.getItem("token")

        Api.get(`/user/${user.id}`)
            .then((res)=>{
                setLogged(true);
                setIsAdm(res.data.isAdmin)
                res.data.isAdmin===true?navegate("/produtos"):navegate("/home")
            }).catch(()=>{
                logout();
                toast.error("Login necessário")
            })
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token) checkTokenExpiration();
    },[])

    const login = ({token, user}:LoginParams)=>{
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setLogged(true);
        user.isAdmin && setIsAdm(true)
        user.isAdmin===true?navegate("/produtos"):navegate("/home")
        navegate("/produtos");
        toast.success("Login bem sucedido")
    }

    const logout = ()=>{
        localStorage.clear();
        setLogged(false);
        setIsAdm(false) 
        navegate("/");
    }

    return(
        <AuthContext.Provider value = {{ logged, isAdm, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
