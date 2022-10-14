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
  margin: 8vh 3vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardImageProduct = styled.span`
  ${({ theme }) => css`
    /* border-bottom: 1px solid ${theme.colors.primaryColor}; */
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 10px; */
  `}
`;

export const ImageProduct = styled.img`
  height: 90%;
  width: 90%;
`;

export const InfoProduct = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-weight: 300;
    width: 50%;
  `}
`;

export const FormEdit = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColor};

    textarea:focus,
    input:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      border-bottom: 1px solid ${theme.colors.primaryColor};
    }
    input {
      border: 0;
      text-decoration: none;
      background-color: white;
      border-bottom: 1px solid ${theme.colors.primaryColor};
      margin: 10px;
      font-size: 140%;
      width: 70%;
      color: ${theme.colors.primaryColor};
    }

    button {
      background-color: white;
      border: 2px solid ${theme.colors.primaryColor};
      border-radius: 50px;
      height: 5vh;
      width: 50%;
      margin-top: 10%;
      transition: all 0.5s;
      font-family: "minimal";
      font-size: 4vh;

      :hover {
        cursor: pointer;
        transform: scale(1.1);

        background-color: ${theme.colors.primaryColor};
        color: white;
      }
    }
  `}
`;
