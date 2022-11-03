import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const ProductsContainer = styled.div`
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
    height: 23vh;
    width: 27rem;
    padding: 10px;
    color: white;
    display: flex;
    transition: all 0.5s;
    :hover {
      box-shadow: 5px 10px 8px ${theme.colors.primaryColorOpacity};
      cursor: pointer;
    }
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  text-align: center;
`;
export const PriceProduct = styled.span`
  font-size: 1.2em;
  text-align: center;
  `;

export const Image = styled.img`
  height: 100%;
  border-radius: 2rem;
  padding: 0.2rem;
  box-sizing: border-box;
`;
export const TextContainer = styled.div`
  padding: 0 0.2rem;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
