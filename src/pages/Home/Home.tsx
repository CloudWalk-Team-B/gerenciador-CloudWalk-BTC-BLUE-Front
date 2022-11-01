import * as S from "../Home/style";
import { Navbar } from "../../components/Navbar";
import { Slider } from "../../components/Carrousel/Slider/Slider";
import { useEffect, useState } from "react";
import { Product } from "../../types/interface";
import Api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { useProducts } from "../../contexts/product";
import { useHandleModals } from "../../contexts/HandleModals";

const Home = () => {

  const { products } = useProducts()
  const { search, setSearch} = useHandleModals()
  const categorias=["Brinquedos","Petiscos e Ração","Medicina e Saúde","Roupas para Pet","Higiene & Limpeza","Outros"]

  const filteresProducts:Product[] = search.length>0?
     products.filter(element => element.name.toUpperCase().includes(search.toUpperCase())):
     products;

  const Toys = filteresProducts.filter((value) => value.category==="Brinquedos");
  const Racao = filteresProducts.filter((value) => value.category==="Petiscos e Ração");
  const Medicina = filteresProducts.filter((value) => value.category==="Medicina e Saúde");
  const Clothes = filteresProducts.filter((value) => value.category==="Roupas para Pet");
  const Higiene = filteresProducts.filter((value) => value.category==="Higiene & Limpeza");
  const Others = filteresProducts.filter((value) => value.category==="Outros");
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
        <Slider title="Brinquedos" children={Toys} />
        <Slider title="Petiscos e Ração" children={Racao} />
        <Slider title="Medicina e Saúde" children={Medicina} />
        <Slider title="Roupas para Pet" children={Clothes}></Slider>
        <Slider title="Higiene & Limpeza" children={Higiene}></Slider>
        <Slider title="Outros" children={Others}></Slider>
      </S.Main>
    </>
  );
};

export default Home;
