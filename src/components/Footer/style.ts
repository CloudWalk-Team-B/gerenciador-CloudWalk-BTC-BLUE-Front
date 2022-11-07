import styled, { css } from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  ${({ theme }) => css`
      z-index: 999999999;
      width: 100%;
      height: 17vh;
      position: static;
      background-color: ${theme.colors.primaryColor};
      bottom: 0;
      color: white;
      margin-top: 3rem;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;

  `}
`;