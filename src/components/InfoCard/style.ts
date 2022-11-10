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
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    :hover {
      cursor: pointer;
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
  text-align:center;
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
