import * as S from "./style";

const ListProducts = () => {
  let list = [
    {
      name: "Racao",
      valor: 20,
      img: "https://tanakao.com.br/media/catalog/product/cache/d8d35210b0b8dd8c9dd34efdb8c87352/l/a/large_68d0c570-d74f-46ac-8151-8e8542e87e17_1k.png",
    },
    {
      name: "Coleira",
      valor: 50,
      img: "https://www.bellbold.com.br/image/cache/cache/1-1000/189/main/9b91-coleira-para-cachorro-poliester-estampa-bellbold-indigo-02-0-2-0-1-2-960x695.png",
    },
    {
      name: "Brinquedo",
      valor: 50,
      img: "https://amepettatix.vteximg.com.br/arquivos/ids/160534-1000-1000/Brinquedo_Pet_Total_Chinelo_De_174.jpg?v=637184071104400000",
    },
    {
      name: "Aranhador",
      valor: 50,
      img: "https://images.tcdn.com.br/img/img_prod/968088/brinquedo_arranhador_para_gato_com_cama_suspensa_306_1_0b78b2b42a76809e0e14c1d940be8248.png",
    },
    {
      name: "Shampoo",
      valor: 50,
      img: "http://www.crivialli.com.br/uploads/produtos/shampoo-doctor-animal-antipulgas-e-carrapaticida-350ml-1562694865.png",
    },
    {
      name: "Alpiste",
      valor: 50,
      img: "http://ponzan.com.br/wp-content/uploads/2018/10/ALPISTE.png",
    },
    {
      name: "Roupa",
      valor: 50,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/961/075/products/15100208427-whatsapp-image-2021-12-13-at-12-04-18-1-removebg-preview-17e808445236ea0ef116445408477807-640-0.png",
    },
  ];
  return (
    <>
      <S.ProductsContainer>
        {list.map<React.ReactNode>((element: any) => {
          return (
            <>
              <S.CardProduct className="animate__animated animate__fadeInUp">
                <S.ImageContainer>
                  <S.Image
                    className="animate__animated animate__zoomIn animate__delay-1s"
                    src={element.img}
                  />
                </S.ImageContainer>
                <S.TextContainer>
                  <S.TitleProduct>{element.name}</S.TitleProduct>
                  <S.PriceProduct>R$: {element.valor}</S.PriceProduct>
                </S.TextContainer>
              </S.CardProduct>
            </>
          );
        })}
      </S.ProductsContainer>
    </>
  );
};

export default ListProducts;
