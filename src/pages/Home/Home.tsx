import * as S from "../Home/style";
import { Navbar } from "../../components/Navbar";
import { Slider } from "../../components/Carrousel/Slider/Slider";
import { Product } from "../../types/interface";
import { useProducts } from "../../contexts/product";
import { useHandleModals } from "../../contexts/HandleModals";
import { SubNavbar } from "../../components/ModalSubNavBar";

const Home = () => {

  const { products, categories } = useProducts()
  const { search, setSearch} = useHandleModals()

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
        <SubNavbar/>
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
