import styled, { css } from "styled-components";
import minimal from "../../assets/styles/minimal.woff";

export const CreateAccountContainer = styled.div`
  @font-face {
    font-family: minimal;
    src: url(${minimal}) format("woff");
  }

  ${({ theme }) => css`
    font-family: "minimal";
    font-weight: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

    img {
      height: 15%;
      margin-top: 20px;
    }

    h2 {
      color: ${theme.colors.primaryColor};
      font-size: 8vh;
      margin-top: 0;
      font-weight: 300;
      margin-bottom: 0;
      padding: 0;
      margin-bottom: 5vh;
      text-align: center;
    }
    p {
      font-size: 5rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      padding: 0;
    }
    div {
      padding: 0 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid ${theme.colors.primaryColor};
      width: 30vw;
      height: 65%;
      border-radius: 15px;

      @media (max-width: 990px) {
        width: 40vw;
      }

      @media (max-width: 692px) {
        width: 50vw;
      }

      @media (max-width: 554px) {
        width: 60vw;
      }

      @media (max-width: 424px) {
        height: 55%;
      }

      p {
        box-sizing: border-box;
        width: 100%;
        height: 1.5rem;
        font-weight: 300;
        font-size: 5.5vh;
        margin-left: 10%;
        color: ${theme.colors.primaryColor};
      }
      #title {
        @media (max-width: 425px) {
          display: none;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5%;
        width: 95%;

        @media (max-width: 425px) {
          margin-top: 30px;
        }

        . {
          color: #ee442f;
          font-size: 1.3rem;
          margin: 0;
          text-align: center;
          margin-top: -2rem;
          font-weight: 600;
        }

        .newAdmManager {
          font-size: 1.3rem;
          font-weight: 600;
          cursor: pointer;
          z-index: 1;
        }

        .isAdmManager {
          color: #ee442f;
          cursor: default;
        }

        input {
          all: unset;
          border-bottom: 1px solid ${theme.colors.primaryColor};
          width: 95%;
          height: 7vh;
          padding: 0 7%;
          margin-bottom: 1rem;
          box-sizing: border-box;
          font-size: 4vh;
          -webkit-appearance: none;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }

        div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          border: none;
          padding: 0;
          width: 100%;
          margin-top: -2rem;

          a,
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
            width: 100%;
            font-size: 3vh;
            margin: 0.5rem;
            border-radius: 3.125rem;
            transition: all 0.5s;
            margin-top: 2vh;
            :hover {
              cursor: pointer;
              transform: scale(1.05);
            }

            @media (max-width: 424px) {
              height: 3rem;
            }
          }
        }
      }
    }
  `}
`;
export const ErrorMessage = styled.h3`
  ${({ theme }) => css`
    position: fixed;
    color: red;
    text-align: center;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    bottom: 2vh;
  `}
`;
