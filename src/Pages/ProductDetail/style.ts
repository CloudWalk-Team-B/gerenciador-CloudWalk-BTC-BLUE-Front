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
    padding: 2rem;
    box-sizing: border-box;
    min-width: 55vw;
    max-width: 55vw;
    align-items: center;
    border: 2px solid #f9f4ec;
    border-radius: 5px;
    margin-top: 3rem;

    .details{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img{
        height: 40vh;
        margin-left: 6.5vw;
      }

      div{
        top: 2%;
        border: 2px solid #f9f4ec;
        border-radius: 5px;
        width: 30%;
        height: 45vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 1rem;
        box-sizing: border-box;

        h1{
          margin: 0;
          margin-bottom: 1rem;
        }

        p{
          margin: 0.5rem;
        }

        .price{
          font-size: 2rem;
        }

        .offer{
          color: #14ad5d;
        }

        .inventory{
          background-color: #63acbe50;
          font-size: .9rem;
          text-align: center;
          margin-top: 1rem;
        }

        .buy{
          background-color: #63acbe;
          height: 1.5rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          border-radius: 3px;
          color: white;
          cursor: pointer;
        }
      }
    }
    .description{
      margin-top: .5rem;
      border-top: 2px solid #f9f4ec;
      width: 100%;
      background-color: #f9f4ec93;
      padding: 0 0.5rem;

    }
}

`;