import styled, { css } from "styled-components";

export const InfoCardContainer = styled.div`
  ${({ theme }) => css`
    text-decoration: none;
    background-color: ${theme.colors.primaryColor};
    color: white;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s;
    :hover {
      transform: scale(0.99);
      cursor: pointer;
    }
  `}
`;

export const Title = styled.h1`
  text-decoration: none;
  text-decoration: none;
  text-transform: none;
  color: #fff;
  font-weight: lighter;
  font-size: 7vh;

  border-bottom: 1px solid white;
`;
export const textInfo = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 5vh;
  padding: 0 20% 0 20%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
