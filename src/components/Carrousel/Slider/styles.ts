import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = styled(Swiper)`
  width: 95%;
  height: 25rem;
  @media (max-width: 678px) {
    margin: 0;
    padding: 4rem;
  }

  .swiper-container {
    width: 480px;
  }
  @media screen and (min-width: 640px) {
    .swiper-container {
      width: 640px;
    }
  }
  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 768px;
    }
  }

  .swiper-button-prev {
    color: #601a4a;
    margin-right: 1rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.5);
    }
    @media (max-width: 678px) {
      display: none;
    }
  }
  .swiper-button-next {
    color: #601a4a;
    margin-left: 1.5rem;

    transition: all 0.3s;
    &:hover {
      transform: scale(1.5);
    }
    @media (max-width: 678px) {
      display: none;
    }
  }
`;

export const Img = styled.img`
  max-width: 95%;
  max-height: 50%;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardSlider = styled(SwiperSlide)`
  max-width: 16.5rem;
  min-width: 10.rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #f9f4ec;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  color: black;
  font-size: 1em;
  width: 100%;
  padding: 0 8%;
  box-sizing: border-box;
`;

export const CardPrice = styled.h3`
  color: black;
  font-size: 1.5em;
  width: 94%;
  padding: 2% 5%;
  box-sizing: border-box;
  margin: 0;
  margin-top: 1rem;
  border-top: 1px solid #f9f4ec;
`;

export const CardPromo = styled.h3`
  color: #14ad5d;
  font-size: 1em;
  width: 94%;
  padding: 0 5%;
  box-sizing: border-box;
  margin: 0.1rem;
`;

export const Delivery = styled.h3`
  color: #14ad5d;
  font-size: 1em;
  width: 94%;
  padding: 0 5%;
  box-sizing: border-box;
  margin: 0.1rem;
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
  text-align: center;
  left: 0;
  color: #f9f4ec;
  background-color: #601a4a;
  padding: 0.3rem 0;
  font-size: 1.8em;
  font-weight: lighter;
`;
