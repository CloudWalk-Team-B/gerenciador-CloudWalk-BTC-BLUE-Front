import Api from "../../services/api";
import Logo from "../../assets/images/logoRoxa.png";
import * as S from "./style";
import { useHandleModals } from "../../contexts/HandleModals";
import { useAuth } from "../../contexts/auth";
import { toast } from "react-hot-toast";
import { useUser } from "../../contexts/User";
import { useNavigate } from "react-router-dom";


const ModalLoading = ({prop}:any) =>{
  
  return(
    <>
    <S.LoadingModal>
      <div>
        <img src={Logo} alt="Capivara logo" />
        <p>{prop}</p>
      </div>
    </S.LoadingModal>
    </>
  )
}

export default ModalLoading


