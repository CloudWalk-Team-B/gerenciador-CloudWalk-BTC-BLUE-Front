import * as S from "./style";
import Logo from "../assets/images/logoBranca.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

const FooterLogged = () => {
  return (
    <>
      <S.Content>
        <S.BoxSoon>
          <S.Soon src={Logo} />
          <S.Name>
            Capivara <br />
            Shop
          </S.Name>
        </S.BoxSoon>
        <S.Search>
          <S.TextSearch
            type="text"
            placeholder="      Procurar..."
          ></S.TextSearch>
          {/* <AiOutlineSearch color="purple" fontSize="1.5em" /> */}
        </S.Search>
        <S.Update>
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
