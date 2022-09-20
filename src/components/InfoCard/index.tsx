import * as S from "./style";

import { Link } from "react-router-dom";

const InfoCard = () => {
  return (
    <S.InfoCardContainer className="animate__animated animate__bounceInRight">
      <S.Title>Sobre nós</S.Title>
      <S.textInfo>
        Clicando aqui você poderá saber um pouco mais sobre o projeto e suas
        tecnologias, e também sobre cada desenvolvedor que ajudou a contrui-lo
      </S.textInfo>
    </S.InfoCardContainer>
  );
};

export default InfoCard;
