import { SubNavbar } from "../../components/ModalSubNavBar"
import { Navbar } from "../../components/Navbar"
import { Product } from "../../types/interface"
import * as S from "./style"

const ProductDetail = () =>{

    const product:Product = (JSON.parse(localStorage.getItem("currentProduct") || ""))

    return(
        <>
            <Navbar />
            <SubNavbar/>
            <S.ProductDetailContainer>
                <section>
                    <div className="details">
                        <img src={product.image} alt="" />
                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                            <p>{`12x R$ ${(product.price/12).toFixed(2)}`}</p>
                            <p>{product.price>20&& "Frete grátis"}</p>
                            <p>{product.inventory&& "Estoque disponível"}</p>
                        </div>
                    </div>
                    <div className="description">
                        <p>Descrição </p>
                        <p>{product.description}</p>
                    </div>
                </section>
                <p></p>
            </S.ProductDetailContainer>
        </>
    )
}

export default ProductDetail