import * as S from "./styles";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Product } from "../../../types/interface";
import { useNavigate } from "react-router-dom";

interface ICard {
  children: Product[];
  title: string;
}

export const Slider = ({ children, title }: ICard) => {
  const settings = {
    spaceBetween: 50,
    navigation: children.length >= 4,
    draggable: true,
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        navigation: false,
        slidesPerGroup: 1,
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  };

  const navegate = useNavigate();

  const handleDetail = (item: Product) => {
    localStorage.setItem("currentProduct", JSON.stringify(item));
    navegate("/product");
  };

  return (
    <>
      {title && (
        <S.Title className="animate__animated animate__backInUp">
          {title}
        </S.Title>
      )}
      <S.Slider
        className="animate__animated animate__backInUp"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        {...settings}
      >
        {children.map((item) => {
          return (
            <S.CardSlider key={item.id} onClick={() => handleDetail(item)}>
              <S.Img src={item.image} />
              <S.CardPrice>R$ {item.price.toFixed(2)}</S.CardPrice>
              <S.CardPromo>{`12x R$ ${(item.price / 12).toFixed(
                2
              )} sem juros`}</S.CardPromo>
              <S.Delivery>{item.price > 20 && "Frete Grátis"}</S.Delivery>
              <S.CardTitle>{item.name}</S.CardTitle>
            </S.CardSlider>
          );
        })}
      </S.Slider>
    </>
  );
};
