import * as S from "../Home/style";
import { Navbar } from "../../components/Navbar";
import { Slider } from "../../components/Carrousel/Slider/Slider";
import { Product } from "../../types/interface";
import { useProducts } from "../../contexts/product";
import { useHandleModals } from "../../contexts/HandleModals";
import { SubNavbar } from "../../components/ModalSubNavBar";

const Home = () => {
  const { products, categories } = useProducts();
  const { search, setSearch } = useHandleModals();

  const filteredProducts: Product[] =
    search.length > 0
      ? products.filter((element) =>
          element.name.toUpperCase().includes(search.toUpperCase())
        )
      : products;

  const Toys = filteredProducts.filter(
    (value) => value.category === "Brinquedos"
  );
  const Racao = filteredProducts.filter(
    (value) => value.category === "Petiscos e Ração"
  );
  const Medicina = filteredProducts.filter(
    (value) => value.category === "Medicina e Saúde"
  );
  const Clothes = filteredProducts.filter(
    (value) => value.category === "Roupas para Pet"
  );
  const Higiene = filteredProducts.filter(
    (value) => value.category === "Higiene & Limpeza"
  );
  const Others = filteredProducts.filter(
    (value) => value.category === "Outros"
  );
  return (
    <>
      <Navbar />
      <S.Main>
        <SubNavbar />
        {filteredProducts.length === 0 && <p>Buscando...</p>}
        {Toys.length !== 0 ? (
          <Slider title="Brinquedos" children={Toys} />
        ) : (
          <></>
        )}
        {Racao.length !== 0 ? (
          <Slider title="Petiscos e Ração" children={Racao} />
        ) : (
          <></>
        )}
        {Medicina.length !== 0 ? (
          <Slider title="Medicina e Saúde" children={Medicina} />
        ) : (
          <></>
        )}
        {Clothes.length !== 0 ? (
          <Slider title="Roupas para Pet" children={Clothes}></Slider>
        ) : (
          <></>
        )}
        {Higiene.length !== 0 ? (
          <Slider title="Higiene & Limpeza" children={Higiene}></Slider>
        ) : (
          <></>
        )}
        {Others.length !== 0 ? (
          <Slider title="Outros" children={Others}></Slider>
        ) : (
          <></>
        )}
      </S.Main>
    </>
  );
};

export default Home;
