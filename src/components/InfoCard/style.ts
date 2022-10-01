import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export const InfoCardContainer = styled.div`
  ${({ theme }) => css`
    text-decoration: none;
    background-color: ${theme.colors.primaryColor};
    color: white;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s;
    :hover {
      cursor: pointer;
      border-radius: 50px;
    }
  `}
`;

export const Title = styled.h1`
  text-decoration: none;
  text-decoration: none;
  text-transform: none;
  color: #fff;
  font-weight: lighter;
  font-size: 7vh;
  border-bottom: 1px solid white;
`;
export const textInfo = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 5vh;
  padding: 0 20% 0 20%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
export const Home = styled(AiOutlineHome)`
 color: rgba(255, 255, 255, 0.8);
 width: 1.2rem;
 height: 1.2rem;


`;
export const Info= styled(FcAbout)`
  color: rgba(255, 255, 255, 0.8);
  width: 1.3rem;
  height: 1.3rem;

`;

export const Nav = styled.nav`
  width:80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled(Link)`
text-decoration: none;
color: #601A4A;
margin: 1rem;

display: flex;
flex-direction: column;
justify-content: center;
aling-items: center;
:hover{
  color: rgba(255, 255, 255, 0.8);
}
`;
export const TextBtn = styled.span`
font-size: 0.9em;
`;