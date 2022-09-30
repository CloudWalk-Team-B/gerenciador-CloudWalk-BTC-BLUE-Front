import * as S from "./style";

const InfoCard = () => {
  return (
    <S.InfoCardContainer className="animate__animated animate__bounceInRight">
      <S.Nav>
        <S.Btn to="/">
            <S.Home/> <S.TextBtn> Home </S.TextBtn>
        </S.Btn>
        <S.Btn to="/info">
           <S.Info/> <S.TextBtn> Sobre </S.TextBtn>
        </S.Btn>
      </S.Nav>
      <S.Title>Sobre nós</S.Title>
      <S.textInfo>
        Clicando aqui você poderá saber um pouco mais sobre o projeto e suas
        tecnologias, e também sobre cada desenvolvedor que ajudou a contrui-lo
      </S.textInfo>
    </S.InfoCardContainer>
  );
};

export default InfoCard;
