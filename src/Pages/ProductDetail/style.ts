import styled from "styled-components";


export const ProductDetailContainer = styled.div`
  padding: 0;
  margin: 0;
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 678px) {
 
  }
  
section{
    min-height: 65rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-sizing: border-box;
    min-width: 50rem;
    max-width: 50rem;
    align-items: center;
    border: 2px solid #f9f4ec;
    border-radius: 5px;
    margin-top: 3rem;
    @media (max-width: 678px) {
    
    }

    .details{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 678px) {
       display:flex;
       flex-direction: column;
      }

      img{
        height: 20rem;
        margin-left: 2rem;
        @media (max-width: 678px) {
        width: 30%;
        height:40%;
        padding: 2rem;
        }
      }

      div{
        border: 2px solid #f9f4ec;
        border-radius: 5px;
        width: 30%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0.5rem;
        box-sizing: border-box;
        @media (max-width: 678px) {
          
        }
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
          background-color: #601a4a50;
          font-size: .9rem;
          text-align: center;
          margin-top: 20%;
        }

        .buy{
          background-color: #601a4a;
          height: 1.5rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          border-radius: 3px;
          color: white;
          cursor: pointer;
          margin-top:0;
          margin-bottom:0;
        }
      }
    }
    .description{
      margin-top: 0.5rem;
      border-top: 2px solid #f9f4ec;
      width: 100%;
      background-color: #f9f4ec93;
      padding: 0 0.5rem;
      @media (max-width: 678px) {
      width: 40%;
      }
    }
}

.slider{
  width: 58%;
  margin-top: 1rem;
}

`;