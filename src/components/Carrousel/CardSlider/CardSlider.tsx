
import * as S from "../Slider/styles";

import { Product } from '../../../types/interface';

import {cardSlider} from "../../../mock.json"
interface ICard{
    title: string;
    content: string;
    image?: string;
    publishDate?: undefined;
}
export const CardSlider = () => {
    return(
        <S.CardSlider>
            {cardSlider.map((index) => (
                <>
                <h1>{index.title}</h1>
                <p>{index.content}</p>
                </>
            ))}
        </S.CardSlider>
        
    )
}