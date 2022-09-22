import * as S from "./style";
import Modal from "react-modal";
import React, { useState } from "react";

const ListProducts = () => {
  let list = [
    {
      id: 1,
      name: "Racao Pedigre para Cão",
      valor: 20,
      img: "https://tanakao.com.br/media/catalog/product/cache/d8d35210b0b8dd8c9dd34efdb8c87352/l/a/large_68d0c570-d74f-46ac-8151-8e8542e87e17_1k.png",
      cod: 9843209489203,
      categoria: "Ração",
      disponivel: true,
    },
    {
      id: 2,
      name: "Coleira para pet em geral",
      valor: 45,
      img: "https://www.bellbold.com.br/image/cache/cache/1-1000/189/main/9b91-coleira-para-cachorro-poliester-estampa-bellbold-indigo-02-0-2-0-1-2-960x695.png",
      cod: 856782034636303,
      categoria: "Coleira",
      disponivel: true,
    },
    {
      id: 3,
      name: "Brinquedo para Cachorro",
      valor: 10,
      img: "https://amepettatix.vteximg.com.br/arquivos/ids/160534-1000-1000/Brinquedo_Pet_Total_Chinelo_De_174.jpg?v=637184071104400000",
      cod: 9089009890203,
      categoria: "Brinquedos",
      disponivel: false,
    },
    {
      id: 4,
      name: "Aranhador para Gatos",
      valor: 70,
      img: "https://images.tcdn.com.br/img/img_prod/968088/brinquedo_arranhador_para_gato_com_cama_suspensa_306_1_0b78b2b42a76809e0e14c1d940be8248.png",
      cod: 10000089203,
      categoria: "Brinquedo",
      disponivel: true,
    },
    {
      id: 5,
      name: "Shampoo para Cachorros",
      valor: 30,
      img: "http://www.crivialli.com.br/uploads/produtos/shampoo-doctor-animal-antipulgas-e-carrapaticida-350ml-1562694865.png",
      cod: 1094579489203,
      categoria: "Banho",
      disponivel: true,
    },
    {
      id: 6,
      name: "Pacote de Alpiste",
      valor: 10,
      img: "http://ponzan.com.br/wp-content/uploads/2018/10/ALPISTE.png",
      cod: 9843209489203,
      categoria: "Ração",
      disponivel: true,
    },
    {
      id: 7,
      name: "Roupa para sua Capivara",
      valor: 50,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/961/075/products/15100208427-whatsapp-image-2021-12-13-at-12-04-18-1-removebg-preview-17e808445236ea0ef116445408477807-640-0.png",
      cod: 1111111111,
      categoria: "Roupa",
      disponivel: false,
    },
  ];

  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [idProduct, setIdProduct] = useState(0);

  function openModal(element: any) {
    setIsOpen(true);
    setIdProduct(element.id);
    console.log(element.id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid purple",
    },
  };

  return (
    <S.Container>
      <S.ProductsContainer>
        {list.map<React.ReactNode>((element, index) => {
          return (
            <S.CardProduct
              key={index}
              className="animate__animated animate__fadeInUp"
              onClick={() => openModal(element)}
            >
              <S.ImageContainer>
                <S.Image
                  className="animate__animated animate__zoomIn animate__delay-1s"
                  src={element.img}
                />
              </S.ImageContainer>
              <S.TextContainer className="animate__animated animate__zoomIn animate__delay-1s">
                <S.TitleProduct>{element.name}</S.TitleProduct>
                <br />
                <S.PriceProduct>R$: {element.valor}</S.PriceProduct>
              </S.TextContainer>
            </S.CardProduct>
          );
        })}
      </S.ProductsContainer>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleModal>Infomações</S.TitleModal>
        <S.InfoProductCard>
          {list.map<React.ReactNode>((element, index) => {
            if (element.id == idProduct) {
              return (
                <>
                  <S.CardImageProduct>
                    <S.ImageProduct src={element.img} />
                  </S.CardImageProduct>
                  <S.InfoProduct>
                    <S.InfoListItem>Nome: {element.name}</S.InfoListItem>
                    <S.InfoListItem>Valor: R${element.valor}.00</S.InfoListItem>
                    <S.InfoListItem>Código: {element.cod}</S.InfoListItem>
                    <S.InfoListItem>
                      Categoria: {element.categoria}
                    </S.InfoListItem>
                    <S.InfoListItem>
                      Disponiivel: {element.disponivel ? "Sim" : "Não"}
                    </S.InfoListItem>
                    ;
                  </S.InfoProduct>
                </>
              );
            }
          })}
        </S.InfoProductCard>
      </Modal>
    </S.Container>
  );
};

export default ListProducts;
