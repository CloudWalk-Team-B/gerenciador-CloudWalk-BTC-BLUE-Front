import Products from "../../components/Products";
import * as S from "./styles";
import { Navbar } from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <S.Main>
        <Products />
      </S.Main>
    </>
  );
};

export default Home;
