import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    width: 100vw;
    height: 13vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  `}
`;

export const BoxSoon = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  margin-left: 30px;
`;
export const Soon = styled.img`
  height: 12vh;
`;
export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    margin-left: 20px;
  `}
`;
export const Update = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 30px;
`;
export const TextUpdate = styled.span`
  margin: 10px;
`;

export const Search = styled.span`
  border-radius: 50px;
  display: flex;
  align-items: center;
`;
export const TextSearch = styled.input`
  ${({ theme }) => css`
    background-color: white;
    height: 6vh;
    width: 30vw;
    color: ${theme.colors.primaryColor};
    border: none;
    border-radius: 50px;
    outline: 0;
  `}
`;
