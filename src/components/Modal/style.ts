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
  justify-content: space-evenly;
`;

export const CardImageProduct = styled.span`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.primaryColor};
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
  `}
`;

export const InfoListItem = styled.h1``;
