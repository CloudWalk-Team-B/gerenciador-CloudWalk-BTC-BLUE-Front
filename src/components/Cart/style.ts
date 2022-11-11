import { Container } from './../Products/style';
import styled from 'styled-components';

export const Wrapper = styled.aside`
  width: 20rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
          background-color: #601a4a;
          color: white;
          font-family: "minimal";
          text-decoration: none;
          border: none;
          height: 4vh;
          width: 65%;
          box-sizing: border-box;
          padding: 0 1rem;
          margin-top: 10%;
          font-size: 1.1em;
          border-radius: 3.125rem;
          transition: all 0.5s;
          :hover {
            cursor: pointer;
            transform: scale(1.05);
            background-color: white;
            color: #601a4a;
            border: 1px solid #601a4a;
            box-shadow: 3px 3px 8px #601a4a;
          }
        }
`;
export const List = styled.section`
  width: 17rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const box = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-arund;
  margin: 0.9rem;

  div{
    cursor:pointer;
  }
  #spinLogIn {
  display: none;
  margin-top: 2%;
}
`;
export const img = styled.img`
 width: 4rem;
 height: 4rem;
`;
export const Name= styled.p`
width: 7rem;
margin: 0.8rem;
`;

export const Item = styled.p`
font-size: 1.3em;
margin: 0.8rem;
`;
export const BoxTotal = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-arund;
  margin: 0.6rem;
`;
export const SubTotal = styled.h3``
export const Total = styled.h3``
export const Frete = styled.h3``