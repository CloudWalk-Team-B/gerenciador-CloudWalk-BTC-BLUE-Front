import styled, { css } from "styled-components";
import minimal from "../../assets/styles/minimal.woff";

export const LoginCardContainer = styled.div`
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
      font-size: 6vh;
      margin-top: 0;
      font-weight: 300;
    }
    div {
      display: flex;
      flex-direction: column;
      border: 2px solid ${theme.colors.primaryColor};
      width: 25vw;
      height: 60%;
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
          margin-bottom: 2.5rem;
          padding: 0 7%;
          box-sizing: border-box;
          font-size: 4vh;
        }

        div {
          display: flex;
          flex-direction: colun;
          border: none;
          justify-content: space-around;
          width: 45%;
          margin: 0.5rem;

          p {
            color: ${theme.colors.primaryColor};
            font-size: 1.2rem;
            margin-top: -2rem;
            margin-left: -30%;
            transition: all 0.5s;
            :hover {
              cursor: pointer;
              transform: scale(1.05);
            }
          }
        }

        button {
          background-color: ${theme.colors.primaryColor};
          color: ${theme.colors.textColor};
          font-family: "minimal";
          text-decoration: none;
          border: none;
          height: 15%;
          width: 50%;
          font-size: 30px;
          border-radius: 3.125rem;
          margin-top: 7%;
          transition: all 0.5s;
          :hover {
            cursor: pointer;
            transform: scale(1.1);
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
