import styled, { css } from "styled-components";

export const TitleComponent = styled.h2`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 15%;
    font-weight: 300;
    width: 40vw;
    margin: 18px 15vw;
    font-size: 3.5vh;
    text-align: center;
  `}
`;

export const MainComponent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    padding: 5% 0;
    box-sizing: border-box;

    div {
      margin-top: 4vh;
      display: flex;
      flex-direction: row;
      width: 60%;
      justify-content: space-between;

      @media (max-width: 678px) {
        flex-direction: column;
        align-items: center;
      }

      input {
        font-size: 1.3rem;
        width: 70%;
        height: 1.5rem;
        text-align: center;
        border-radius: 50px;
        border: 1px solid ${theme.colors.primaryColor};
      }

      select {
        width: 25%;
        font-size: 1rem;
        /* border-radius: 50px;
        border: 1px solid ${theme.colors.primaryColor}; */
        @media (max-width: 678px) {
          margin-top: 5px;
          width: 45%;
        }

        option {
          text-align: center;
        }
      }
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
      box-sizing: border-box;
      height: 3.8rem;
      width: 15%;
      font-size: 3vh;
      border-radius: 3.125rem;
      transition: all 0.5s;

      @media (max-width: 678px) {
        height: 3rem;
        width: 25%;
        font-size: 3.5vh;
      }

      :hover {
        cursor: pointer;
        transform: scale(0.99);
        background-color: white;
        border: 1px solid ${theme.colors.primaryColor};
        color: ${theme.colors.primaryColor};
        box-shadow: 3px 3px 8px ${theme.colors.primaryColorOpacity};
      }
    }
  `}
`;
