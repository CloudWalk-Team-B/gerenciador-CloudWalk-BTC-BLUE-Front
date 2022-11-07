import * as S from "./style";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/product";
import Moddal from "../ModalProduct";
import { useHandleModals } from "../../contexts/HandleModals";
import { Product, User } from "../../types/interface";
import ModdalNewProduct from "../ModalNewProduct";
import { useAuth } from "../../contexts/auth";

const ListProducts = () => {
  Modal.setAppElement("#root");
  
  const user:User = (JSON.parse(localStorage.getItem("user") || ""))
  const handleUser = () =>{
    if(user.isAdmin===true && user.isManager === true){
      return(
        <S.CardProduct className="animate__animated animate__fadeInUp" onClick={()=>setOpenNewProduct(!openNewProduct)}>
          <S.PriceProduct>+</S.PriceProduct>
          <section>
          <S.ImageContainer>
                  <S.Image
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    src="https://cdn-icons-png.flaticon.com/512/1004/1004733.png"
                  />
          </S.ImageContainer>
          <S.TitleProduct>Adicionar<br/>Produto</S.TitleProduct>
          <span></span>
          </section>
          </S.CardProduct>
      )
      
    }
  }

  const [idProduct, setIdProduct] = useState<string>("");
  const { openProduct, setOpenProduct, openNewProduct, setOpenNewProduct, search, setSearch } = useHandleModals();
  const { isAdm } = useAuth()

  const openNewProductModal = (open: boolean) => {
    if (open === true) {
      return <ModdalNewProduct/>;
    }
  };

  const openProductModal = (open: boolean) => {
    if (open === true) {
      return <Moddal/>;
    }
  };

  const { products, handleGetProduct } = useProducts();

  const filteredProducts: Product[] = search.length>0?
    products.filter(element=>element.name.toUpperCase().includes(search.toLocaleUpperCase())).length>0?
    products.filter(element=>element.name.toUpperCase().includes(search.toLocaleUpperCase())):
    products.filter(element=>element.code.toString().includes(search)).length>0?
    products.filter(element=>element.code.toString().includes(search)):products:
    products

  return (
    <>
      <S.Container>
        <S.ProductsContainer>
        <>
        {handleUser()}
          {filteredProducts.map<React.ReactNode>((element: Product, index) => {
            return (
              <S.CardProduct
              key={index}
              className="animate__animated animate__fadeInUp"
                onClick={() => {
                  setIdProduct(element.id);
                  setOpenProduct(true);
                  localStorage.setItem("currentProduct", JSON.stringify(element))
                }}
                >
                <S.PriceProduct>CODE - {element.code}</S.PriceProduct>
                <section>
                <S.ImageContainer>
                  <S.Image
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    src={element.image}

                  />
                </S.ImageContainer>
                <S.TextContainer className="animate__animated animate__zoomIn animate__delay-1s">
                  <br/>
                  <S.TitleProduct>{element.name}</S.TitleProduct>
                  <br />
                  <S.PriceProduct>R$: {element.price.toFixed(2)}</S.PriceProduct>
                  <S.TitleProduct>{element.inventory?"Disponível":"Sem Estoque"}</S.TitleProduct>
                  <br />
                </S.TextContainer>
                </section>
              </S.CardProduct>
            );
          })}
          </>
        </S.ProductsContainer>
      </S.Container>
      {openProductModal(openProduct)}
      {openNewProductModal(openNewProduct)}
    </>
  );
};

export default ListProducts;
