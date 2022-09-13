import * as S from "./style";

const ListProducts = () => {
  let list = [
    { name: "racao", valor: 20 },
    { name: "coleira", valor: 50 },
  ];
  return (
    <>
      <S.ProductsContainer>
        {list.map<React.ReactNode>((i: any) => {
          console.log(i);
          return (
            <>
              <S.CardProduct></S.CardProduct>
            </>
          );
        })}
      </S.ProductsContainer>
    </>
  );
};

export default ListProducts;
