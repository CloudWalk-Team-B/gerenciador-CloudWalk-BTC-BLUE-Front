import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  ${({ theme }) => css``}
`;

export const ProductsContainer = styled.div`
  height: 87vh;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  
  `;

export const CardProduct = styled.div`
  ${({ theme }) => css`
    margin: 10px;
    background-color: ${theme.colors.primaryColor};
    border-radius: 12px;
    height: 19vh;
    width: 45%;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    transition: all 0.3s;
    :hover {
      box-shadow: 5px 10px 8px ${theme.colors.primaryColorOpacity};
      cursor: pointer;
    }

    section{
      display: flex;
      flex-direction: row;
      border-top: 1px solid white;
      margin-top: 0.5rem;
      padding-top: 0.5rem;

      
    }
  `}
`;

export const ImageContainer = styled.div`
  background-color: white;
  height: 15vh;
  width: 40%;
  border-radius: 10px;
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
  padding-left: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
