import * as S from "./style";
import Modal from "react-modal";
import { useState } from "react";

const ListProducts = () => {
  let list = [
    {
      id: 1,
      name: "Racao",
      valor: 20,
      img: "https://tanakao.com.br/media/catalog/product/cache/d8d35210b0b8dd8c9dd34efdb8c87352/l/a/large_68d0c570-d74f-46ac-8151-8e8542e87e17_1k.png",
    },
    {
      id: 2,
      name: "Coleira",
      valor: 50,
      img: "https://www.bellbold.com.br/image/cache/cache/1-1000/189/main/9b91-coleira-para-cachorro-poliester-estampa-bellbold-indigo-02-0-2-0-1-2-960x695.png",
    },
    {
      id: 3,
      name: "Brinquedo",
      valor: 50,
      img: "https://amepettatix.vteximg.com.br/arquivos/ids/160534-1000-1000/Brinquedo_Pet_Total_Chinelo_De_174.jpg?v=637184071104400000",
    },
    {
      id: 4,
      name: "Aranhador",
      valor: 50,
      img: "https://images.tcdn.com.br/img/img_prod/968088/brinquedo_arranhador_para_gato_com_cama_suspensa_306_1_0b78b2b42a76809e0e14c1d940be8248.png",
    },
    {
      id: 5,
      name: "Shampoo",
      valor: 50,
      img: "http://www.crivialli.com.br/uploads/produtos/shampoo-doctor-animal-antipulgas-e-carrapaticida-350ml-1562694865.png",
    },
    {
      id: 6,
      name: "Alpiste",
      valor: 50,
      img: "http://ponzan.com.br/wp-content/uploads/2018/10/ALPISTE.png",
    },
    {
      id: 7,
      name: "Roupa",
      valor: 50,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/961/075/products/15100208427-whatsapp-image-2021-12-13-at-12-04-18-1-removebg-preview-17e808445236ea0ef116445408477807-640-0.png",
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
          <S.CardImageProduct>
            <S.ImageProduct src="http://ponzan.com.br/wp-content/uploads/2018/10/ALPISTE.png" />
          </S.CardImageProduct>
          <S.InfoProduct>
            <h1>Nome: Pacote de Alpistes</h1>
            <h1>Valor: R$15.00 </h1>
            <h1>Categoria: Ração </h1>
            <h1>Código: 197483209 </h1>
            <h1>Disponivel: Sim </h1>
          </S.InfoProduct>
        </S.InfoProductCard>
      </Modal>
    </S.Container>
  );
};

export default ListProducts;
