import * as S from "./styles";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Product } from "../../../types/interface";

interface ICard{
    children: Product[];
    title: string
}

export const Slider = ({children,title}:ICard) => {
    
    const settings= {
        spaceBetween: 50,
        slidesPerView:5,
        navigation: children.length >= 5,
        draggable:  true,
        loop: true,
    }
   
    return(
        <>
            <S.Title>{title}</S.Title>
        <S.Slider modules={[Navigation, Pagination, Scrollbar, A11y]} {... settings} >
            {children.map((item) => {
                return(
                <S.CardSlider key={item.id}> 
                    <S.Img src={item.image}/>
                    <S.CardTitle>{item.name}</S.CardTitle>
                    <S.CardPrice>R$ {item.price},00</S.CardPrice>
                    </S.CardSlider>
            )})}
        </S.Slider>
        </>
    )
};