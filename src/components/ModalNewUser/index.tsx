import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import "./styles.css";

const Moddal = () => {
  const { openNewUser, setOpenNewUser, setIsAdmManager } = useHandleModals();
  const closeModal = () => {
    setOpenNewUser(false);
  };

  const [password, setPassword] = useState<string>("");
  const [isManager, setIsManager] = useState<boolean>(false);

  const handleIsManager = (value: string) => {
    if (value === "adm") {
      setIsManager(false);
    } else if (value === "manager") {
      setIsManager(true);
    }
  };

  const handleRegister = (value: boolean, password: string) => {
    const data = {
      code: password,
    };
    if (value === false) {
      Api.post("/auth/adminCheck", data)
        .then(() => {
          setIsAdmManager("adm");
          setOpenNewUser(false);
          toast.success("Validação Concluída!");
        })
        .catch(() => toast.error("Chave Incorreta"));
    } else {
      Api.post("/auth/managerCheck", data)
        .then(() => {
          setIsAdmManager("manager");
          setOpenNewUser(false);
          toast.success("Validação Concluda!");
        })
        .catch(() => toast.error("Chave Incorreta"));
    }
  };

  return (
    <>
      <Modal
        isOpen={openNewUser}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="customStyless"
        contentLabel="Example Modal"
      >
        <S.TitleComponent>Cadastro de Colaborador</S.TitleComponent>
        <S.MainComponent>
          <div>
            <input
              type="password"
              placeholder="Chave de segurança"
              onChange={(e) => setPassword(e.target.value)}
            />
            <select onChange={(e) => handleIsManager(e.target.value)}>
              <option value="adm">Administrador</option>
              <option value="manager">Gerente</option>
            </select>
          </div>
          <button onClick={() => handleRegister(isManager, password)}>
            Verificar
          </button>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default Moddal;
