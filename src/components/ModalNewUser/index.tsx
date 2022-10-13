import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";

const Moddal = () => {
  const { openNewUser, setOpenNewUser } = useHandleModals();
  const closeModal = () => {
    setOpenNewUser(false);
  }

  const[password, setPassword] = useState<string>("")
  const [isManager, setIsManager] = useState<boolean>(false)
  
  const handleIsManager = (value:string) =>{
    if(value === "adm"){
      setIsManager(false)
    }else if(value === "manager"){
      setIsManager(true)
    }
  }

  const handleRegister = (value:boolean, password:string) =>{
    if(value===false){
      Api.post("confirmAdm", password)
        .then(()=>{
            
          })
        .catch()
    }else{
      Api.post("confirmManager", password)
        .then(
          ()=>{
            Api.post("user")
          })
        .catch()
    }
  }


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid purple",
      height: "45vh",     
      
    },
  };

  return (
    <>
      <Modal
        isOpen={openNewUser}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleComponent>
          Verificação da chave de segurança
        </S.TitleComponent>
        <S.MainComponent>
            <div>
              <input type="text" placeholder="Chave de segurança" onChange={e => setPassword(e.target.value)}/>
              <select onChange={e => handleIsManager(e.target.value)}>
                <option value="adm">Administrador</option>
                <option value="manager">Gerente</option>
              </select>
            </div>
            <button onClick={()=>handleRegister(isManager, password)}>
              Verificar
            </button>
        </S.MainComponent>


      </Modal>
    </>
  );
};

export default Moddal;
