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
    isAuth: boolean;
    login: (params:LoginParams)=> void;
    logout: ()=> void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }:AuthProviderProps) =>{

    const navegate= useNavigate()
    const [logged, setLogged] = useState<boolean>(false);
    const [ isAdm, setIsAdm ] = useState<boolean>(false)
    const [ isAuth, setIsAuth ] = useState<boolean>(false)

    const checkTokenExpiration = () =>{
        const user = JSON.parse(localStorage.getItem("user") || "")
        Api.get(`/user/${user.id}`)
            .then((res)=>{
                if(res.data.isAuth){
                    setLogged(true);
                    const Admin:boolean = res.data.isAdmin
                    setIsAdm(Admin)
                    setIsAuth(true)
                    Admin? navegate("/produtos"):navegate("/")
                }else{toast.error("Login necessário")}
                // logout();
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
        if(user.isAuth){
            setLogged(true);
            setIsAuth(true)
            const Admin:boolean = user.isAdmin
            Admin&& setIsAdm(true)
            Admin?navegate("/produtos"):navegate("/");
            toast.success("Login bem sucedido")
        }else{
            toast.error("Validação de conta por email necessária")
        }
    }

    const logout = ()=>{
        localStorage.clear();
        setLogged(false);
        setIsAdm(false)
        setIsAuth(false) 
        navegate("/");
    }

    return(
        <AuthContext.Provider value = {{ logged, isAdm, login, logout, isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
