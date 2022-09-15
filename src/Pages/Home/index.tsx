import Products from '../../components/Products';
import * as S from'./styles'
import { Navbar } from '../../components/Navbar';
export const Home = () => {
    return(
        <>
        <Navbar/>
        <S.Main>
         <Products/>
        </S.Main>
        </>
    )
}