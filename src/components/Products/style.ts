import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const ProductsContainer = styled.div`
  /* border: 1px solid black; */
  height: 87vh;
  width: 95%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardProduct = styled.div`
  ${({ theme }) => css`
    margin: 10px;
    background-color: ${theme.colors.primaryColor};
    border-radius: 20px;
    height: 20%;
    width: 25%;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: space-around;
  `}
`;

export const ImageContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 55%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;
export const TitleProduct = styled.span`
  font-size: 1.5em;
  text-align: center;
`;
export const PriceProduct = styled.span`
  font-size: 1.2em;
  text-align: center;
`;

export const Image = styled.img`
  height: 100%;
`;
export const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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
