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

export const InputContent = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .eyePassword {
    /* display: block; */
    transition: all 0.3s;
    :hover {
      cursor: pointer;
      transform: scale(0.99);
    }
  }

  .eyePasswordClose {
    /* display: none; */
    transition: all 0.3s;
    :hover {
      cursor: pointer;
      transform: scale(0.99);
    }
  }

  div {
    height: 100px;
  }
`;
