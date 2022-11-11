import * as S from "./styles";

export const SubNavbar = () => {
  return (
    <>
      <S.Bars className="animate__animated animate__backInUp">
        <S.Card>
          <S.Frete />{" "}
          <S.Text>
            Frete Grátis
            <br />
            acima de R$20,00
          </S.Text>
        </S.Card>
        <S.Card>
          <S.CreditCard />{" "}
          <S.Text>
            Até 12x
            <br />
            sem juros
          </S.Text>
        </S.Card>
        <S.Card>
          <S.Coupon />{" "}
          <S.Text>
            Cupom de até <br /> 30% de desconto
          </S.Text>
        </S.Card>
      </S.Bars>
    </>
  );
};
