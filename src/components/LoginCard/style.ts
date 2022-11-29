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
      font-size: 2em;
      margin-top: 0;
      font-weight: 300;
      text-align: center;
      @media (max-width: 678px) {
        font-size: 1.5em;
      }
      
    }
    div {
      display: flex;
      flex-direction: column;
      border: 2px solid ${theme.colors.primaryColor};
      width: 32vw;
      height: 62%;
      border-radius: 15px;

      @media (max-width: 770px) {
        width: 60vw;
      }

      @media (max-width: 950px) {
        height: 55%;
      }

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
          height: 30%;

          p {
            color: ${theme.colors.primaryColor};
            width: 60vw;

            font-size: 200%;
            margin-top: -2rem;
            margin-left: -30%;
            transition: all 0.5s;
            :hover {
              cursor: pointer;
              transform: scale(1.01);
            }

            @media (max-width: 950px) {
              font-size: 120%;
            }
          }
        }

        section{
          align-items:center;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          margin-top: -0.5rem;
          width: 70%;

          button {
          background-color: ${theme.colors.primaryColor};
          color: ${theme.colors.textColor};
          font-family: "minimal";
          text-decoration: none;
          border: none;
          height: 2.2rem;
          width: 40%;
          box-sizing: border-box;
          padding: 0 1rem;
          margin-top: 3%;
          font-size: 1.3em;
          border-radius: 3.125rem;
          transition: all 0.5s;
          :hover {
            cursor: pointer;
            transform: scale(1.05);
            background-color: white;
            color: ${theme.colors.primaryColorOpacity};
            border: 1px solid ${theme.colors.primaryColorOpacity};
            box-shadow: 3px 3px 8px ${theme.colors.primaryColorOpacity};
          }
          @media (max-width: 678px) {
            height: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1em;
          }
        }
      }

        #spinLogIn {
          display: none;
          margin-top: 2%;
        }

        #buttonLogIn{
          display:none
        }

        .buttonHiden{
          display:none
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
