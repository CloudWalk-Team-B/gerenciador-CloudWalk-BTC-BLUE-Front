import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

const ModdalNewProduct = () => {
  const { openNewProduct, setOpenNewProduct} = useHandleModals();
  const closeModal = () => {
    setOpenNewProduct(false);
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
        isOpen={openNewProduct}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleComponent>
          Adicionar novo produto
        </S.TitleComponent>
        <S.MainComponent>
            <div>
              <input type="password" placeholder="Chave de segurança" onChange={e => setPassword(e.target.value)}/>
              <select onChange={e => handleIsManager(e.target.value)}>
                <option value="adm">Administrador</option>
                <option value="manager">Gerente</option>
              </select>
            </div>
            <button>
              Verificar
            </button>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default ModdalNewProduct;
