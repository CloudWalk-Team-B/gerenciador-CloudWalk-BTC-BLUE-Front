import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  padding: 0;
  margin: 0;
  max-width: 100vw;
  height: 100%;
  display: flex;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

section{
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    max-width: 55vw;
    justify-content: center;
    align-items: center;
    border: 2px solid #f9f4ec;
    margin-top: 3rem;

    .details{
      margin-top: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img{
        height: 40vh;
        margin-left: 15%;
      }

      div{
        margin-right: 2%;
        top: 2%;
        border: 1px solid #f9f4ec;
        width: 30%;
        height: 40vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 1rem;
        box-sizing: border-box;

        h1{
          color: blue;
        }
      }
    }
}

`;