import styled from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiStyledcomponents, SiPostgresql, SiVercel } from "react-icons/si";



export const Content = styled.section`
width: 75%;
height: 15vh;
display: flex;
padding: 0;
box-sizing: border-box;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 0.2rem;
`;
export const Container = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Title = styled.h2`
font-size: 1.1em;
margin: 0.3rem;
color: #CCCCCC;
@media(max-width: 768px) {
    font-size: 0.8em;  
    margin: 0.2rem;
}
`;
export const TitleAbout = styled.h1`
font-size: 1em;
margin: 0;
color: #601A4A;
padding-top: 2rem;
@media(max-width: 768px) {
    font-size: 0.8em;  
    margin: 0.2rem;
}
`;
export const Img = styled.img`
width: 5rem;
height: 5rem;
`;
export const SubTitle = styled.h3`
font-size: 0.8em;
margin-top: -0.5rem;
color: #CCCCCC;
@media(max-width: 768px) {
    font-size: 0.6em;  
    margin: 0.4rem;
}
`;
export const CardText = styled.details`
padding: 0 .5rem;
margin:0;
margin-top: -1rem;
text-align: center;
font-size: .8em;
position: relative;
color: #FFF;
cursor: pointer;
@media(max-width: 768px) {
    display: none;
}

`;
export const Desc = styled.p`
text-align: center;
font-size: 1em;
position: relative;
color: #601A4A;
margin: 0;
`;
export const CardContainer = styled.section`
width: 75%;
height: 45vh;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
@media(max-width: 768px) {
    width: 100%;
    box-shadow:none;
}
`;
export const SecondCardContainer = styled.section`
width: 75%;
height: 15vh;
margin-top: 1rem;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
@media(max-width: 768px) {
    width: 100%;
    box-shadow:none;
}
`;
export const Card = styled.section`
width:45%;
height: 19.5vh;
display: flex;
align-items: center;
background-color: #601A4A;
border-radius: 0.5rem;
margin: 0 1rem;
transition: all .5s;
&:hover{
    box-shadow: 0px 0px 32px 0px rgba(245,231,81,1);
}
@media(max-width: 768px) {
    max-width:11rem;
    max-height:10.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.9rem;
    border-radius: 0.3rem;
  }
`;
export const CardImg = styled.img`
height:17vh;
margin-left: 4%;
@media(max-width: 768px) {
    width: 100%;
    height:6rem; 
    padding: 0;
    border-radius: 0.2rem;
}
border-radius: 3px;
`;
export const CardDetails = styled.section`
width: 70%;
border-right: 1px solid white;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
@media(max-width: 768px) {
    width: 100%;
    height:6rem; 
}
`;
export const BtnGit = styled(AiOutlineGithub)`
width: 2rem;
height: 2rem;
color: #FFF;
margin-left: 0.2rem;
padding: 0.5rem;
& :hover{
    color: gold;
    transform: scale(1.05);
} 
`;







export const BtnIn = styled(AiFillLinkedin)`
width: 2rem;
height: 2rem;
color: #FFF;
margin-right: 0.2rem;
padding: 0.5rem;

& :hover{
    color: gold;
    transform: scale(1.05);
} 
@media(max-width: 768px) {
    margin: 0;
}

`;

export const Btns = styled.div`
display: flex;
`; 
export const Btn = styled.a`
`;
export const CardSkill = styled.section`
width: 5rem;
height: 5rem;
border: solid 1px  #601A4A;
border-radius: 0.8rem;
display: flex;
justify-content: center;
align-items: center;
margin: 2rem;


`; 

export const Freact = styled(FaReact)`
width: 2.5rem;
height:2.5rem;
color: #5ed3f3;
margin: 1rem;
`;
export const Fnode = styled(FaNodeJs)`
width: 2.5rem;
height:2.5rem;
color: #4d973b;
margin: 1rem;

`;
export const Stypescript = styled(SiTypescript)`
width: 2.5rem;
height:2.5rem;
color: gold;
margin: 1rem; 
`;
export const Snest = styled(SiNestjs)`
width: 2.5rem;
height:2.5rem;
color: red;
margin: 1rem;
`;
export const Sstyled = styled(SiStyledcomponents)`
width: 2.5rem;
height:2.5rem;
color: #c162b0;
margin: 1rem; 
`;
export const Spostgres = styled(SiPostgresql)`
width: 2.5rem;
height:2.5rem;
color: #31648c;
margin: 1rem; 
`;
export const Svercel = styled(SiVercel)`
width: 2.5rem;
height:2.5rem;
color: #292e3c;
margin: 1rem; 
`;