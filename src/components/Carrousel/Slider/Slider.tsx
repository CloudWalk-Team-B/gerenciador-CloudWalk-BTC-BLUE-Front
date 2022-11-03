import * as S from "./styles";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Product } from "../../../types/interface";
import { useNavigate } from "react-router-dom";

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

    const navegate = useNavigate()

    const handleDetail = (item:Product) => {
        localStorage.setItem("currentProduct", JSON.stringify(item))
        navegate("/product")
    }
   
    return(
        <>
            <S.Title>{title}</S.Title>
            <S.Slider modules={[Navigation, Pagination, Scrollbar, A11y]} {... settings}>
                {children.map((item) => {
                    return(
                        <S.CardSlider key={item.id} onClick={()=>handleDetail(item)}> 
                        <S.Img src={item.image}/>
                        <S.CardPrice>R$ {item.price.toFixed(2)}</S.CardPrice>
                        <S.CardPromo>{`12x R$ ${(item.price/12).toFixed(2)} sem juros`}</S.CardPromo>
                        <S.Delivery>{item.price>20 && "Frete Grátis"}</S.Delivery>
                        <S.CardTitle>{item.name}</S.CardTitle>
                        </S.CardSlider>
                    )})}
            </S.Slider>
        </>
    )
};