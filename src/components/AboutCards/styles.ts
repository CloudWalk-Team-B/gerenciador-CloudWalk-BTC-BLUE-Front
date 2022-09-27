import styled from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiStyledcomponents, SiPostgresql, SiVercel } from "react-icons/si";



export const Content = styled.section`
width: 90%;
height: 15rem
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 5rem;
`;
export const Container = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center
margin: 4rem;
`;
export const Title = styled.h2`
font-size: 1em;
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
heigth: 5rem;
`;
export const SubTitle = styled.h3`
font-size: 0.8em;
margin: 0;
color: #CCCCCC;
@media(max-width: 768px) {
    font-size: 0.6em;  
    margin: 0.4rem;
}
`;
export const CardText = styled.details`
margin:0;
text-align: center;
font-size: 0.7em;
position: relative;
color: #FFF;
@media(max-width: 768px) {
    display: none;
}

`;
export const Desc = styled.p`
margin: 2rem;
text-align: center;
font-size: 0.9em;
position: relative;
color: #601A4A;
`;
export const CardContainer = styled.section`
width: 90%;
height: 100vh;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
margin-bottom:2rem;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
@media(max-width: 768px) {
    width: 100%;
    box-shadow:none;
}
`;
export const Card = styled.section`
max-width:19rem;
max-height:11rem;
display: flex;
align-items: center;
background-color: #601A4A;
border-radius: 0.5rem;
margin: 0;
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
width: 7rem;
height:7rem;
padding-left: 0.7rem;
@media(max-width: 768px) {
    width: 100%;
    height:6rem; 
    padding: 0;
    border-radius: 0.2rem;
}
`;
export const CardDetails = styled.section`
width: 9rem;
height: 100%;
display: flex;
padding: 1rem;
flex-direction: column;
justify-content: center;
align-items: center;
@media(max-width: 768px) {
    width: 100%;
    height:6rem; 
}
`;
export const BtnGit = styled(AiOutlineGithub)`
width: 1.5rem;
height:1.5rem;
color: #FFF;
margin-left: 0.2rem;
padding: 0.5rem;
& :hover{
    color: black;
    transform: scale(1);
} 
`;
export const BtnIn = styled(AiFillLinkedin)`
width: 1.5rem;
height:1.5rem;
color: #FFF;
margin-right: 0.2rem;
padding: 0.5rem;

& :hover{
    color: black;
    transform: scale(1);
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
width: 10rem;
height: 10rem;
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
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
} 
`;
export const Fnode = styled(FaNodeJs)`
width: 2.5rem;
height:2.5rem;
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
    transform: scale(1);
    
} 
`;
export const Stypescript = styled(SiTypescript)`
width: 2.5rem;
height:2.5rem;
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
    transform: scale(1);
} 
`;
export const Snest = styled(SiNestjs)`
width: 2.5rem;
height:2.5rem;
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
    transform: scale(1);
} `;
export const Sstyled = styled(SiStyledcomponents)`
width: 2.5rem;
height:2.5rem;
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
    transform: scale(1);
} 
`;
export const Spostgres = styled(SiPostgresql)`
width: 2.5rem;
height:2.5rem;
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
    transform: scale(1);
} 
`;
export const Svercel = styled(SiVercel)`
width: 2.5rem;
height:2.5rem;
color: #601A4A;
margin: 1rem;
& :hover{
    color: blue;
    transform: scale(1);
} 
`;