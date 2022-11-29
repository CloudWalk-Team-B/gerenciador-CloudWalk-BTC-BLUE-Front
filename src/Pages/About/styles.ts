import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 678px) {
    width: 100vw;
  }
`;
