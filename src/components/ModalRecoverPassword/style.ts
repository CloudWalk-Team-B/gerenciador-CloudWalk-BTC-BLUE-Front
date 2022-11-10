// import { color } from "@mui/system";
import styled, { css } from "styled-components";

export const TitleModal = styled.h2`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 8vh;
    font-weight: 300;
    width: 40vw;
    margin: 10px 10vw;
    font-size: 7vh;
    text-align: center;

    @media (max-width: 720px) {
      width: 50vw;
    }
    @media (max-width: 590px) {
      font-size: 5vh;
    }
    @media (max-width: 414px) {
      font-size: 4vh;
    }
  `}
`;

export const InfoProductCard = styled.div`
  ${({ theme }) => css`
    margin: 5vh 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 90%;
      height: 40px;
      border-radius: 50px;
      /* padding-left: 15px; */
      font-size: 20px;
      text-align: center;
      margin-bottom: 50px;
    }

    h1 {
      text-align: center;
      @media (max-width: 590px) {
        font-size: 5vh;
      }
      @media (max-width: 414px) {
        font-size: 4vh;
      }
    }

    button {
      /* margin-top: 30px; */
      width: 70%;
      height: 50px;
      border-radius: 50px;
      background-color: ${theme.colors.primaryColor};
      /* border: 1px solid white; */
      color: white;
      font-size: 30px;
      font-family: minimal;
      transition: all 0.3s;

      :hover {
        cursor: pointer;
        background-color: white;
        box-shadow: 3px 3px 8px ${theme.colors.primaryColorOpacity};
        color: ${theme.colors.primaryColor};
        border: 1px solid ${theme.colors.primaryColor};
      }
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #spin {
    display: none;

    /* &active {
      background-color: red;
    } */
  }
`;
