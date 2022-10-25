import * as S from "./style";
import Logo from "../../assets/images/logoBranca.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "../../contexts/auth";
import { useHandleModals } from "../../contexts/HandleModals";
import ModalUpdate from "../ModalUpdate";

const HeaderLogged = (props: any) => {

  const { openUpdate, setOpenUpdate } = useHandleModals();

  const openModal = (open: boolean) => {
    if (open === true) {
      return <ModalUpdate/>;
    }
  };

  const { logout } = useAuth();
  if (props.header === "add") {
    return (
      <>
        <S.Content className="animate__animated animate__slideInDown">
          <S.BoxSoon>
            <S.Soon
              className="animate__animated animate__slideInLeft animate__delay-1s"
              src={Logo}
              onClick={() => {
                logout();
              }}
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
            <S.Update className="animate__animated animate__slideInRight animate__delay-1s" onClick={()=>setOpenUpdate(!openUpdate)}>
              <S.TextUpdate>
                Atualização <br />
                em massa
              </S.TextUpdate>
              <FiPlus color="white" fontSize="1.5em" />
            </S.Update>
             <S.Btn to="/">
              <S.Home/> <S.TextUpdate>Home</S.TextUpdate>
             </S.Btn>
             <S.Btn to="/info">
               <S.Info/> <S.TextUpdate>Sobre</S.TextUpdate>
              </S.Btn>
               
          </S.Nav>
        </S.Content>
        {openModal(openUpdate)}
      </>
    );
  }
  return (
    <>
      <S.Content className="animate__animated animate__slideInDown">
        <S.BoxSoon>
          <S.Soon
            className="animate__animated animate__slideInLeft animate__delay-1s"
            src={Logo}
            onClick={() => {
              logout();
            }}
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
        <S.Update className="animate__animated animate__slideInRight animate__delay-1s">
          <S.TextUpdate>
            Atualização <br />
            em massa
          </S.TextUpdate>
          <FiPlus color="white" fontSize="1.5em" />
        </S.Update>
        <S.Info/>
        <S.Home/>
      </S.Content>
      {openModal(openUpdate)}
    </>
  );
};

export default HeaderLogged;
