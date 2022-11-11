import styled, { css } from "styled-components";
import "animate.css";
import { FaShippingFast,FaRegCreditCard } from "react-icons/fa";
import { RiCoupon3Line } from "react-icons/ri";

export const Bars = styled.section`
 width: 100%;
 height: 5rem;
 border-bottom: solid 1.3px  #601c4A; 
 display: flex;
 justify-content: space-around;
 align-items: center;
`;
export const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const Frete = styled(FaShippingFast)`
width: 3rem;
height: 3rem;
color: #601c4A;
margin: 0.2rem;
`
export const CreditCard = styled(FaRegCreditCard)`
width: 3rem;
height: 3rem;
color: #601c4A;
margin: 0.2rem;
`;
export const Coupon = styled(RiCoupon3Line)`
width: 3rem;
height: 3rem;
color: #601c4A;
margin: 0.2rem;
`;
export const Text = styled.p`
color:#601c4A;
margin: 0.2rem;
`;

