import * as S from "./style";
import Capivaras from "../../assets/images/capivaras.png";

const AboutContent = () => {
  return (
    <>
      <S.AboutInfo>
        <S.InfoProject>
          <S.ImageCapivara src={Capivaras} />
          <S.Info>olaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</S.Info>
        </S.InfoProject>
      </S.AboutInfo>
    </>
  );
};

export default AboutContent;
