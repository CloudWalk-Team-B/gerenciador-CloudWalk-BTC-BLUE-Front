import styled, { css } from "styled-components";

export const TitleComponent = styled.h2`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 10%;
    font-weight: 300;
    width: 40vw;
    margin: 18px 10vw;
    font-size: 3.5vh;
    margin-bottom: 2rem;
  `}
`;

export const MainComponent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
    box-sizing: border-box;

    section{
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: top;
      justify-content: center;

      img{
        width: 12rem;
        height: 12rem;
        border: 1px solid ${theme.colors.primaryColor};
        border-radius: 5px;
        margin: 1rem;
      }
    
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        
        

        input{
          all: unset;
          font-size: 1.4rem;
          border-bottom: 1px solid ${theme.colors.primaryColor};
          width: 100%;
          height: 1.5rem;
          padding: 1rem;
          box-sizing: border-box;
          border:none;
          border-bottom: 1px solid black;
          margin-bottom: 0.8rem;
          
        }

        select{
          width: 70%;
          font-size: 1.2rem;
          margin: 2rem;
          
          option{
            text-align: center;
            
          }
        }
      }
    }

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
            width: 15%;
            font-size: 3vh;
            border-radius: 3.125rem;
            transition: all 0.5s;
            margin-bottom: 1rem;
            
            :hover {
              cursor: pointer;
              transform: scale(1.05);
            }
          }
        
  `}
`;









