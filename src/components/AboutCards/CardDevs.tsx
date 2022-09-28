import { dev } from "./dataDev";
import * as S from "./styles";

export const Devs = () => {
    return(
        <S.CardContainer>
            {
                dev.map((index ) => (
                    <S.Card>
                        <S.CardImg src={index.img} alt={index.name}/>
                        <S.CardDetails>
                            <S.Title>{index.name}</S.Title>
                            <S.SubTitle>{index.info}</S.SubTitle>
                            <S.CardText>{index.bio}</S.CardText>
                            <S.Btns>
                                <S.Btn href={index.linkedin}><S.BtnIn/></S.Btn>
                                <S.Btn href={index.githug}><S.BtnGit/></S.Btn>
                            </S.Btns>
                        </S.CardDetails>
                    </S.Card>
                ))
            }
        </S.CardContainer>
    )
};