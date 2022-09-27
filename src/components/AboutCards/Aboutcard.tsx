import * as S from "./styles";
import { aboutProject } from "./dataDev";
import Logo from "../../assets/images/logoRoxa.png";
export const AboutProject = () => {
    return(
        <S.Content>
            {
                aboutProject.map((index) => (
                    <>
                     <S.Container>
                     <S.Img src={Logo} alt="logo capivara pets"/>
                     <S.TitleAbout>{index.title}</S.TitleAbout>
                     </S.Container>
                     <S.Desc>{index.text}</S.Desc>
                    </>
                ))
            }
        </S.Content>
    )
};