import styled, { css } from "styled-components";

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
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;