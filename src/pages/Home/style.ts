import styled from "styled-components";
import { FaShippingFast,FaRegCreditCard } from "react-icons/fa";
import { RiCoupon3Line } from "react-icons/ri";

export const Main = styled.main`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 678px) {
    width: 100%;
  }

  p{
    margin-top: 1rem;
  }
`;
