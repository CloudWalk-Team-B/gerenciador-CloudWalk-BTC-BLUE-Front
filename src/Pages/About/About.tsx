import { AboutProject } from "../../components/AboutCards/Aboutcard";
import { Devs } from "../../components/AboutCards/CardDevs";
import { Skills } from "../../components/AboutCards/CardSkills";
import { Navbar } from "../../components/Navbar";
import * as S from "./styles";

export const About = () => {
    return(
        <>
        <Navbar/>
        <S.Main>
            <AboutProject/>
            <Devs/>
            <Skills/>
        </S.Main>
        </>
    )
};