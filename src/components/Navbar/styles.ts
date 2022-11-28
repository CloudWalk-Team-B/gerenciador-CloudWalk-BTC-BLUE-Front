import styled, { css } from "styled-components";
import { BsBagPlusFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaUserPlus,FaUser,FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { Link } from "react-router-dom";
import "animate.css";

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    max-width: 100vw;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    @media (max-width: 678px) {
      height: auto;
      width: 100%;
    }
  `}
`;

export const BoxSoon = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.7em;
  margin-left: 30px;
  @media (max-width: 678px) {
    font-size:0;
  }
  section{
    display: flex;
    flex-direction: row;
    align-items:center;
    cursor: pointer;
  }
  div{
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    font-size: 1.5rem;
    .getOut{
      cursor:pointer
    }
    @media (max-width: 678px) {
      font-size: 0.9rem;
      margin: 0.3rem;
    }
  }
`;
export const Soon = styled.img`
  height: 4.5rem;
  cursor: pointer;
  @media (max-width: 678px) {
    height: 2.7rem;
  }
  
`;
export const Name = styled.span`
  ${({ theme }) => css`
    overflow: hidden;
    color: ${theme.colors.textColor};
    margin-left: 20px;
    cursor: pointer;
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
  @media (max-width: 678px) {

  }
`;
export const TextSearch = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.constants.bodyFontFamily};
    background-color: white;
    height: 1.4rem;
    width: 30rem;
    color: ${theme.colors.primaryColor};
    border: none;
    border-radius: 50px;
    outline: 0;
    padding: 10px 30px;
    font-size: 1em;
    @media (max-width: 678px) {
      display:none;
      width: 6rem ;
      height: 0.9rem;
      font-size: 0.8em;
      margin: 0 ;
      padding:0;
    }
  `}
`;

export const GearAccount = styled(MdOutlineManageAccounts)`
  color: rgba(255, 255, 255, 0.8);
  width: 2rem;
  height: 2rem;
  @media (max-width: 678px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const Gear = styled(BsGear)`
  color: rgba(255, 255, 255, 0.8);
  width: 2.5rem;
  height: 2.5rem;
  margin: 0;
  @media (max-width: 678px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`

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
 @media (max-width: 678px) {
  width: 1.6rem;
  height: 1.6rem;
}
`;
export const Info= styled(FcAbout)`
  color: rgba(255, 255, 255, 0.8);
  width: 2.5rem;
  height: 2.5rem;
  margin: 0;
  @media (max-width: 678px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
export const Bag = styled(BsBagPlusFill)`
  color: rgba(255, 255, 255, 0.8);
  width: 2.5rem;
  height: 2.5rem;
  margin: 0;
  @media (max-width: 678px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
export const ButtonBag = styled.div`
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
@media (max-width: 678px) {
  width: 2.5rem;
}
`;
export const Btn = styled(Link)`
text-decoration: none;
cursor: pointer;
width: 1.6rem;
margin: 0 1rem;
margin-right: 2rem;
height: 100%;
background-color: #601A4A;
font-size: 0.7em;
border: none;
color: white;
:hover{
  color: rgba(255, 255, 255, 0.8);
}
@media (max-width: 678px) {
  width: 2.5rem;
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
  @media (max-width: 678px) {
    width: 8rem;
  }
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
@media (max-width: 678px) {
  width: 1.6rem;
  height: 1.6rem;
}
`