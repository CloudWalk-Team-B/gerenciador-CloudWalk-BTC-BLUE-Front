import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.primaryColor};

    header {
      background-color: ${theme.colors.primaryColor};
      width: 100%;
      height: 10%;
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-weight: lighter;
      font-size: 4vh;
    }

    img {
      height: 90%;
      margin-right: 20px;
    }
  `}
`;

export const ImageProfile = styled.figure`
  ${({ theme }) => css`
    height: 22%;
    width: 11%;
    /* border: 1px solid ${theme.colors.primaryColor}; */
    /* border-radius: 50%;
     */
    /* border-bottom: 1px solid ${theme.colors.primaryColor}; */

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  `}
`;

export const InfoProfile = styled.div`
  ${({ theme }) => css`
    font-size: 5vh;
    text-align: center;
    /* border-top: 1px solid ${theme.colors.primaryColor}; */
    /* font-weight: 800; */

    p {
      margin: 30px;
    }
  `}
`;

export const ButtonEditProfiles = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 20px;
    /* flex-direction: column; */

    button {
      width: 12vw;
      height: 7vh;
      font-size: 3vh;
      margin: 0px 10px;
      background-color: ${theme.colors.primaryColor};
      color: white;
      border: 2px solid ${theme.colors.primaryColor};
      border-radius: 50px;
      transition: all 0.5s;

      :hover {
        cursor: pointer;
        transform: scale(0.99);
        background-color: white;
        color: ${theme.colors.primaryColor};
        box-shadow: 3px 3px 8px ${theme.colors.primaryColorOpacity};
      }
    }
  `}
`;
