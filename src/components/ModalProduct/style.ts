import styled, { css } from "styled-components";

export const TitleModal = styled.h2`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 8vh;
    font-weight: 300;
    width: 40vw;
    margin: 10px 10vw;
    font-size: 7vh;
  `}
`;

export const InfoProductCard = styled.div`
  margin: 8vh 3vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardImageProduct = styled.span`
  ${({ theme }) => css`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ImageProduct = styled.img`

  height: 100%;
  width: 100%;
`;

export const InfoProduct = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-weight: 300;
    width: 50%;
  `}
`;

export const FormEdit = styled.form`
  ${({ theme }) => css`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.primaryColor};

    textarea:focus,
    input:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      border-bottom: 1px solid ${theme.colors.primaryColor};
    }

    label{
      margin-right: 2rem;
    }
  
    input {
      border: 0;
      text-decoration: none;
      background-color: white;
      border-bottom: 1px solid ${theme.colors.primaryColor};
      margin: 10px;
      font-size: 120%;
      width: 65%;
      color: ${theme.colors.primaryColor};
    }

    div{
      display: flex;
      justify-content: center;
      button {

      background-color: white;
      border: 2px solid ${theme.colors.primaryColor};
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 5vh;
      width: 40%;
      margin-top: 10%;
      transition: all 0.5s;
      font-family: "minimal";
      font-size: 4vh;

      :hover {
        cursor: pointer;
        transform: scale(1.05);

        background-color: ${theme.colors.primaryColor};
        color: white;
      }
    }
    }

    div{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
    
  `}
`;

export const InputForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 3vh;
    width: 6.5rem;
  }

  select{
    width: 22rem;
    margin: 0.9rem;
    font-size: 1.1rem;

    option{
      text-align: center;
    }
  }

`;

export const ConfimDelete = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  display: flex;
  align-items: center;

  section{
    width: 60%;
    height: 12rem;
    background-color: white;
    border: 2px solid #601a4a;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;

    div{
      width: 60%;
      display: flex;
      justify-content: space-between;
      
      button{
        width: 45%;
        margin: 0;
      }
    }
  }
`;
