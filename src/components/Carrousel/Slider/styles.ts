import styled from "styled-components"
import { Swiper,SwiperSlide } from "swiper/react"

export const Slider = styled(Swiper)`
width: 95%;
height: 15rem;
  
  .swiper-button-prev {
    color: #601A4A;
    margin-right:1rem;
    &:hover{
      transform: scale(1.5);
    }
  }
  .swiper-button-next {
    color: #601A4A;
    margin-left: 1.5rem;
    &:hover{
      transform: scale(1.5);
    }
  }
`;
export const Img = styled.img`
width:6rem;
height: 5.5rem;
&:hover{
  transform: scale(1.3);
}
`;

export const CardSlider = styled(SwiperSlide)`
width:13rem;
height: 15rem;
background-color: tranparent;
display: flex;
flex-direction: column;
justify-content: center ;
align-items: center;
cursor: pointer;
`;

export const CardTitle = styled.h2`
color: #601A4A;
font-size: 1em;
`;
export const CardPrice = styled.h3`
color: #601A4A;
font-size: 1em;
`;
export const CardCenter = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;


export const Around = styled.section`
width: 100vw;

`;
export const Title = styled.h1`
margin: 1.7rem;
width: 100%;
left: 0;
color: #601A4A;
font-size: 1.8em;
font-weight: lighter;

`;

