import * as S from "../Home/style";
import { Navbar } from "../../components/Navbar";
import { Slider } from "../../components/Carrousel/Slider/Slider";
import { useEffect, useState } from "react";
import { Product } from "../../types/interface";
import Api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { useProducts } from "../../contexts/product";

const Home = () => {

  const { products } = useProducts()

  const Acessory = products.filter((value) => {
    if (value.category === "Recomendado") {
      return value;
    }
  });
  const Racao = products.filter((value) => value.category==="Ração");
  const Banho = products.filter((value) => value.category==="Medicina e Saúde");
  const Pijamas = products.filter((value) => value.category==="Pijama para Pet");
  const Higiene = products.filter((value) => value.category==="Higienie e Limpeza");
  const Others = products.filter((value) => value.category==="Outros");
  return (
    <>
      <Navbar />
      <S.Main>
        <S.Bars>
          <S.Card>
            <S.Frete />{" "}
            <S.Text>
              Frete Grátis
              <br />
              para todo Brasil
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
            <S.Text >
              Cupom de até <br /> 30% de desconto
            </S.Text>
          </S.Card>
        </S.Bars>
        <Slider title="Produtos Recomendados" children={Acessory} />
        <Slider title="Rações " children={Racao} />
        <Slider title="Medicina e Saúde" children={Banho} />
        <Slider title="Pijama para Pet" children={Pijamas}></Slider>
        <Slider title="Higiene & Limpeza" children={Higiene}></Slider>
        <Slider title="Outros" children={Others}></Slider>
      </S.Main>
    </>
  );
};

export default Home;
