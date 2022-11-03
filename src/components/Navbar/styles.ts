import styled, { css } from "styled-components";
import { BsBagPlusFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { FaUserPlus,FaUser,FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "animate.css";

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    max-width: 100vw;
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
    font-size: 1.5rem;
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

export const TextUpdate = styled.span`
width: 100%;
margin-right: 5px;
font-size: 0.9em;

`;
export const TextModal = styled.span`
width: 100%;
margin-right: 5px;
font-size: 0.9em;
color: #601A4A;
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
export const BtnUser = styled(FaUserCircle)`
color: rgba(255, 255, 255, 0.8); 
color:white;
 width: 2.2rem;
 height: 2.2rem;
 margin: 0;
`;
export const User = styled(FaUser)`
 color: #601A4A;
 margin: 0.5rem;
`;
export const Register = styled(FaUserPlus)`
 color: #601A4A;
 width: 1.6rem;
 height: 1.6rem;
 margin: 0.5rem;

`;
export const Info= styled(FcAbout)`
  color: rgba(255, 255, 255, 0.8);
  width: 2.5rem;
  height: 2.5rem;
  margin: 0;

`;
export const Bag = styled(BsBagPlusFill)`
  color: rgba(255, 255, 255, 0.8);
  width: 2.5rem;
  height: 2.5rem;
  margin: 0;
`;
export const Btn = styled(Link)`
width: 4.5rem;
height: 100%;
text-decoration: none;
color: rgba(255, 255, 255, 0.8);
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
:hover{
  color: rgba(255, 255, 255, 0.8);
}
`;
export const BtnModal = styled(Link)`
width: 100%;
height: 1.8rem;
text-decoration: none;
color: rgba(255, 255, 255, 0.8);
margin-bottom: 2rem;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
`;

export const Nav = styled.nav`
  width:17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;
export const Button = styled.button`
cursor: pointer;
width: 1.6rem;
margin: 0 1rem;
margin-right: 2rem;
height: 100%;
background-color: #601A4A;
border: none;
color: white;
`

export const SearchIcon = styled(BiSearch)`
width: 2rem;
height: 2rem;
color: #601c4A;
margin-left: -2.5rem;
z-index: 1;
cursor:pointer;
`


