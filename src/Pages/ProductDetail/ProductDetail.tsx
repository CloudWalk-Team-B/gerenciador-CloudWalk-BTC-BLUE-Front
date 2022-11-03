import toast from "react-hot-toast"
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
                            <p className="price">R$ {product.price.toFixed(2)}</p>
                            <p className="offer">12x R$ {(product.price/12).toFixed(2)}</p>
                            <p className="offer">{product.price>20&& "Frete grátis"}</p>
                            <p className="inventory">{product.inventory? "Estoque disponível":"Produto em falta"}</p>
                            <p className="buy" onClick={()=>toast.error("Recurso em desenvolvimento")}>Comprar Agora</p>
                            <p className="buy" onClick={()=>toast.error("Recurso em desenvolvimento")}>Adicionar ao carrinho</p>
                        </div>
                    </div>
                    <div className="description">
                        <p>Descrição: </p>
                        <p>{product.description}</p>
                    </div>
                </section>
                <p></p>
            </S.ProductDetailContainer>
        </>
    )
}

export default ProductDetail