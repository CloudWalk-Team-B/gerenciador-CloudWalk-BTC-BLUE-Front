import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import "animate.css";

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    @media (max-width: 576px) {
    }
  `}
`;

export const BoxSoon = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  margin-left: 30px;
  div {
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    font-size: 1.3rem;
    .getOut {
      cursor: pointer;
    }
  }
`;
export const Soon = styled.img`
  height: 12vh;
  margin-top: 0.8rem;
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
  flex-direction: row;
  align-items: center;
  width: 55%;
  div {
    width: 10rem;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-right: 2px solid white;
    box-sizing: border-box;
    margin-right: 2rem;
  }
`;
export const TextUpdate = styled.p`
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

export const Updt = styled(MdOutlineSystemUpdateAlt)`
  color: rgba(255, 255, 255, 0.8);
  color: white;
  margin: 0;
`;

export const Info = styled(FcAbout)`
  color: rgba(255, 255, 255, 0.8);
  width: 1.2rem;
  height: 1.2rem;
  margin: 0;
`;
export const Btn = styled(Link)`
  text-decoration: none;
  color: #601a4a;
  margin: 0;
  :hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Nav = styled.nav`
  width: 18%;
  font-size: 1.1em;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3rem;
  box-sizing: border-box;

  p{
    margin: 0.2rem 1rem;
  }

  span{
    padding-left: 0rem;
  }

  div {
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
`;

export const Profile = styled(HiUserCircle)`
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`;
