import Api from "../../services/api";
import Logo from "../../assets/images/logoRoxa.png";
import * as S from "./style";
import { useHandleModals } from "../../contexts/HandleModals";
import { useAuth } from "../../contexts/auth";
import { toast } from "react-hot-toast";
import { useUser } from "../../contexts/User";
import { useNavigate } from "react-router-dom";


export const EmailConfirmation = () =>{
  
  const { setModalConfirm } =useHandleModals()
  const { login } = useAuth()
  const { user } = useUser()
  const navegate = useNavigate()
  
  const handleButton = () =>{
    if(user!==undefined){
    Api.get(`/user/${user.id}`)
      .then((res)=>{
        if(res.data.isAuth){
          setModalConfirm(false);
          login({token:res.data.token, user:res.data});
        }else{
          toast.error("Ativação de conta pendente")
        }
      }).catch(()=>{
        toast.error("Erro, tente novamente em alguns instantes")
      })
    }else{
      setModalConfirm(false);
      navegate("/login");
      toast.error("Login necessário")
    }
    }

  return(
    <>
    <S.ConfirmationModal>
      <div>
        <S.Close onClick={()=>{setModalConfirm(false)}}/>
        <img src={Logo} alt="Capivara logo" />
        <p>Verifique sua caixa de entrada e valide o email registrado!</p>
        <button type="button" onClick={()=>handleButton()}>Continuar</button>
      </div>
    </S.ConfirmationModal>
    </>
  )
}


