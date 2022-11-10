import { useNavigate } from "react-router-dom";
import * as S from "./style";


const InfoCard = () => {

  const navegate = useNavigate()

  return (
      <S.InfoCardContainer className="animate__animated animate__bounceInRight">
        <div onClick={()=>navegate("/info")}>
          <S.Title>Sobre nós</S.Title>
          <S.textInfo >
            Clicando aqui você poderá saber um pouco mais sobre o projeto e suas
            tecnologias, e também sobre cada desenvolvedor que ajudou a contruí-lo
          </S.textInfo>
        </div>
      </S.InfoCardContainer>
  );
};

export default InfoCard;
