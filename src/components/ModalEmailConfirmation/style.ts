import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export const ConfirmationModal = styled.div`
  ${({ theme }) => css`
    position: fixed; 
    background-color: #00000099;
    width: 100%;
    height: 100vh;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColor};
    font-size: 1.5em;

    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      width: 60%;
      height: 50vh;
      border: 2px solid ${theme.colors.primaryColor};
      border-radius: 10px;

    img{
      height: 50%;
    }

      button {
            background-color: ${theme.colors.primaryColor};
            color: ${theme.colors.textColor};
            font-family: "minimal";
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            text-align: center;
            border: none;
            padding: 0 1rem;
            height: 3.8rem;
            width: 30%;
            font-size: 3vh;
            margin: 0.5rem;
            border-radius: 3.125rem;
            transition: all 0.5s;
            margin-top: 2vh;
            :hover {
              cursor: pointer;
              transform: scale(1.05);
            }
          }
    }
  `}
`;
