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
    }
    p {
      font-size: 2rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      padding: 0;
    }
    div {
      display: flex;
      flex-direction: column;
      border: 2px solid ${theme.colors.primaryColor};
      width: 30vw;
      height: 65%;
      border-radius: 15px;

      p {
        font-weight: 300;
        font-size: 5.5vh;
        margin-left: 5%;
        margin-top: 2%;
        color: ${theme.colors.primaryColor};
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5%;

        input {
          all: unset;
          border-bottom: 1px solid ${theme.colors.primaryColor};
          width: 80%;
          height: 7vh;
          /* border-radius: 15px; */
          margin-bottom: 5%;
          padding: 0 7%;
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

          a {
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
            height: 30%;
            width: 100%;
            font-size: 4vh;
            margin: 0.5rem;
            border-radius: 3.125rem;
            transition: all 0.5s;
            margin-top: 5vh;
            :hover {
              cursor: pointer;
              transform: scale(1.05);
            }
          }
        }
      }
    }
  `}
`;
export const ErrorMessage = styled.h3`
  ${({ theme }) => css`
    color: red;
    align-self: center;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `}
`;
