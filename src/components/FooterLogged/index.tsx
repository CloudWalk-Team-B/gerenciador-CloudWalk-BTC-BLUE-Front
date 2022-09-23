import * as S from "./style";
import Logo from "../../assets/images/logoBranca.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "../../contexts/auth";

const FooterLogged = () => {

  const { logout } = useAuth()
  return (
    <>
      <S.Content className="animate__animated animate__slideInDown">
        <S.BoxSoon>
          <S.Soon
            className="animate__animated animate__slideInLeft animate__delay-1s"
            src={Logo} onClick={()=>{logout()}}
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
      </S.Content>
    </>
  );
};

export default FooterLogged;
