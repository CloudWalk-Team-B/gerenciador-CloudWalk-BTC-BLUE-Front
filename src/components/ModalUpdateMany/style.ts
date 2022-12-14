import styled, { css } from "styled-components";

export const TitleComponent = styled.h2`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 2rem;
    font-weight: 300;
    width: 38vw;
    margin: 18px 30vw;
    font-size: 3.5vh;
  `}
`;

export const MainComponent = styled.div`
  ${({ theme }) => css`
  overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    padding: 5% 0;
    box-sizing: border-box;

    #spinMany{
      display: none;
      margin-top: 20px;
    }

      div{
        margin-top: 4vh;
        display: flex;
        flex-direction: row;
        width: 60%;
        justify-content: center;

        input{
          font-size: 1.3rem;
          width: 70%;
          height: 1.9rem;
          text-align: center;
          border: 1px solid black;
        }

      select {
        width: 25%;
        font-size: 1rem;

        option {
          text-align: center;
        }
      }
    }

    button {
      margin-top: 2%;
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.textColor};
      font-family: "minimal";
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      text-align: center;
      border: none;
      padding: 0 1rem;
      box-sizing: border-box;
      height: 3.8rem;
      width: 15%;
      font-size: 3vh;
      border-radius: 3.125rem;
      transition: all 0.5s;
      :hover{
        cursor: pointer;
        background-color: white;
        color: ${theme.colors.primaryColor};
        border: 1px solid ${theme.colors.primaryColor};
      }

      .bothButtons{
        display: flex;
        flex-direction: row;
        width: 25%;
        justify-content: space-between;

        button {
            background-color: ${theme.colors.primaryColor};
            color: ${theme.colors.textColor};
            font-family: "minimal";
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            text-align: center;
            border: none;
            padding: 0 1rem;
            box-sizing: border-box;
            height: 3.8rem;
            width: 45%;
            font-size: 3vh;
            border-radius: 3.125rem;
            transition: all 0.5s;
            
            :hover {
              cursor: pointer;
              transform: scale(1.05);
            }
          }

      }

     
  `}
`;

export const Container = styled.div`
  @media print {
    #full {
      display: none;
    }
    #print {
      display: block;
    }
    #print,
    #print * {
      visibility: visible;
    }
    #print {
      position: fixed;
      left: 0;
      top: 0;
    }
  }
`;

export const PrintContainer = styled.div`
  width: 90vw;
  top: 1%;
  border: 1px solid black;
  margin-top: 0px;
  #print {
    display: none;
  }

  #table {
    width: 90vw;
    display: flex;
    border-bottom: 1px solid black;
    div {
      width: 34%;
      margin-left: 5px;
      /* color: red; */
      font-size: 30px;
    }

    #primary {
      text-align: left;
    }

    #secondary {
      text-align: center;
    }

    #terciary {
      text-align: right;
    }
  }

  #title {
    font-size: 35px;
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
  }

  @media print {
    #print {
      display: block;
    }
  }
`;
