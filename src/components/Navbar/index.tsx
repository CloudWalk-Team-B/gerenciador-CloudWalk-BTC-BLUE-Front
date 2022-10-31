import * as S from './styles';
import Logo from "../../assets/images/logoBranca.png";
import Modal from "react-modal";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
  
  const navegate = useNavigate()

  // const [modalIsOpen, setIsOpen] = useState(false);
  // const closeModal = () => {
  //   setIsOpen(false);
  // }
  // const openModal = () => {
  //   setIsOpen(true);
  // }
  // const customStyles: any = {
  //   content: {
  //     left: "85%",
  //     width: "150px",
  //     height: "100px",
  //     position: "absolute",
  //     display: "block",
  //     overflow: "hidden",
  //   },
  // };
  
  return (
    <>
      <S.Content className="animate__animated animate__slideInDown">
          <S.BoxSoon>
            <S.Soon
              className="animate__animated animate__slideInLeft animate__delay-1s"
              src={Logo}
            />
            <S.Name className="animate__animated animate__bounceIn animate__delay-1s	">
              Capivara <br />
              Shop
            </S.Name>
          </S.BoxSoon>
          <S.Search>
            <S.TextSearch
              className="animate__animated animate__jackInTheBox animate__delay-1s"
              type="text"
              placeholder="Procurar..."
            ></S.TextSearch>
          </S.Search>
          <S.Nav>
             <S.Btn to="/info">Sobre nós
               <S.Info/> 
              </S.Btn>
               <S.Btn to="/">Sacola
                <S.Bag/>
              </S.Btn>
           <S.Button onClick={()=>navegate("/Login")}><S.BtnUser/>Entrar</S.Button>
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >            
              <S.BtnModal to="/login">
                <S.User/> <S.TextModal>Entrar</S.TextModal>
              </S.BtnModal>
              <S.BtnModal to="/cadastro">
                <S.Register/> <S.TextModal>Cadastrar</S.TextModal>
              </S.BtnModal>
            </Modal> */}
          </S.Nav>
        </S.Content>
    </>
  );
}