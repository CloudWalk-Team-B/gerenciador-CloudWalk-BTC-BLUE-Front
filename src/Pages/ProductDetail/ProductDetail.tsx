import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { SubNavbar } from "../../components/ModalSubNavBar"
import { Navbar } from "../../components/Navbar"
import { useAuth } from "../../contexts/auth"

import { Product } from "../../types/interface"
import { Slider } from "../../components/Carrousel/Slider/Slider";
import * as S from "./style"
import { useProducts } from "../../contexts/product"
import { useEffect } from "react"
import Api from "../../services/api"
import { useNewCart } from "../../contexts/NewCart"

const ProductDetail = () =>{
    const product:Product = (JSON.parse(localStorage.getItem("currentProduct") || ""));
    const newCategory = product.category
    const { logged } = useAuth()
    const navegate = useNavigate()
    const { products, categories } = useProducts()
    const { cart, handleGetCart } = useNewCart()

    useEffect(()=>window.scrollTo(0, 0),[])
    useEffect(()=>window.scrollTo(0, 0),[product])

    
    const FilteredByCategory = products.filter((value) => value.category===newCategory);

    const handleClick = (id:string) =>{
        if(logged){
            const data = {
                productId: id
              }
            Api.post("Cart/addItem",data)
            .then(()=>handleGetCart())
            .catch(()=>console.log("not ok"))
        }else{
            toast.error("Login necessário")
        }
    }

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
                            <p className="buy" onClick={()=>toast.success("Recurso em desenvolvimento")}>Comprar Agora</p>
                            <p className="buy" onClick={()=>handleClick(product.id)}>Adicionar ao carrinho</p>
                        </div>
                    </div>
                    <div className="description">
                        <p>Descrição: </p>
                        <p>{product.description}</p>
                    </div>
                </section>
                <div className="slider">
                    {FilteredByCategory.length!==0? <Slider title="" children={FilteredByCategory}/>:<></>}
                </div>
            </S.ProductDetailContainer>
        </>
    )
}

export default ProductDetail