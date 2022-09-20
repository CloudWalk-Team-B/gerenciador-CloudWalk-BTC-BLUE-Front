import * as S from "./style";
import Products from "../../components/Products";
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
