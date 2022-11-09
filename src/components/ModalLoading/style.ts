import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export const LoadingModal = styled.div`
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
      animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
				from {
					transform: rotate(0deg);
				}

				to {
					transform: rotate(359deg);
				}
			}

    }
  `}
`;
