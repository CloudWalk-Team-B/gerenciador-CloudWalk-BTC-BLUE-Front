import * as S from "./style";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useProducts } from "../../contexts/product";
import Moddal from "../ModalProduct";
import { useHandleModals } from "../../contexts/HandleModals";
import { Product, User } from "../../types/interface";
import ModdalNewProduct from "../ModalAddProduct";

const ListProducts = () => {
  Modal.setAppElement("#root");
  
  const user:User = (JSON.parse(localStorage.getItem("user") || ""))
  const handleUser = () =>{
    if(user.isAdmin===true && user.isManager === true){
      return(
        <S.CardProduct className="animate__animated animate__fadeInUp" onClick={()=>setOpenNewProduct(!openNewProduct)}>
          <S.ImageContainer>
                  <S.Image
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    src="https://static.vecteezy.com/ti/vetor-gratis/t2/363962-sinal-de-mais-linha-preta-icone-gr%C3%A1tis-vetor.jpg"
                  />
          </S.ImageContainer>
          <S.TitleProduct>Adicionar Produto</S.TitleProduct>

          </S.CardProduct>
      )
      
    }
  }

  const [idProduct, setIdProduct] = useState<string>("");
  const { openProduct, setOpenProduct, openNewProduct, setOpenNewProduct, search, setSearch } = useHandleModals();

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
    products.filter(element=>element.name.toUpperCase().includes(search.toLocaleUpperCase())):
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
                <S.ImageContainer>
                  <S.Image
                    className="animate__animated animate__zoomIn animate__delay-1s"

                    src={element.image}

                  />
                </S.ImageContainer>
                <S.TextContainer className="animate__animated animate__zoomIn animate__delay-1s">
                  <S.TitleProduct>{element.name}</S.TitleProduct>
                  <br />
                  <S.PriceProduct>R$: {element.price.toFixed(2)}</S.PriceProduct>
                </S.TextContainer>
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
