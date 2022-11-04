import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import "animate.css";

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 100vw;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  `}
`;

export const BoxSoon = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  margin-left: 30px;
  div{
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    font-size: 1.3rem;
    .getOut{
      cursor:pointer
    }
  }
`;
export const Soon = styled.img`
  height: 12vh;
`;
export const Name = styled.span`
  ${({ theme }) => css`
    overflow: hidden;
    color: ${theme.colors.textColor};
    margin-left: 20px;
  `}
`;
export const Update = styled.span`
  width: 10rem;  
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 30px;
  cursor: pointer;
`;
export const TextUpdate = styled.span`
font-size: 1.2em;
margin: 10px;
`;

export const Search = styled.span`
  border-radius: 50px;
  display: flex;
  align-items: center;
`;
export const TextSearch = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.constants.bodyFontFamily};
    background-color: white;
    height: 2.5vh;
    width: 30vw;
    color: ${theme.colors.primaryColor};
    border: none;
    border-radius: 50px;
    outline: 0;
    padding: 10px 30px;
    font-size: 1em;
  `}
`;
export const Home = styled(AiOutlineHome)`
 color: rgba(255, 255, 255, 0.8);
 width: 1.2rem;
 height: 1.2rem;
 margin: 0;

`;
export const Info= styled(FcAbout)`
  color: rgba(255, 255, 255, 0.8);
  width: 1.2rem;
  height: 1.2rem;
  margin: 0;

`;
export const Btn = styled(Link)`
text-decoration: none;
color: #601A4A;
margin:0;
:hover{
  color: rgba(255, 255, 255, 0.8);
}
`;

export const Nav = styled.nav`
  width:17rem;;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
