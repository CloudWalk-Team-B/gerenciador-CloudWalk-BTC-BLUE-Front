import React, { useEffect, useState } from "react";
import * as S from "./style";

const Report = (props: any) => {
  const [dados, setDados] = useState<any>();
  useEffect(() => {
    setDados(props.props);
  });

  console.log("carrego");
  console.log("props", dados ? dados.data.user.email : "nao");
  return (
    <>
      <S.PrintContainer>
        <div id="print">
          {dados && (
            <>
              {/* {console.log(
                dados.data.attTable.productName,
                dados.data.attTable.priceAtt,
                dados.data.attTable.priceOld
              )} */}
              <div id="title">
                <div>{dados.data.user.name}</div>
                <div>{dados.data.attTable.createdAt}</div>
              </div>
              <div id="table">
                <div id="primary">Produto:</div>
                <div id="secondary">Preรงo atual:</div>
                <div id="terciary">Preรงo antigo:</div>
              </div>
              {dados.data.attTable.productName.map(
                (element: any, index: any) => {
                  {
                    console.log("๐๐บ๐๐๐", element, index);
                  }
                  return (
                    <>
                      <div id="table">
                        <div id="primary">{element}</div>
                        <div id="secondary">
                          {dados.data.attTable.priceAtt[index]}
                        </div>
                        <div id="terciary">
                          {dados.data.attTable.priceOld[index]}
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </>
          )}
        </div>
      </S.PrintContainer>
    </>
  );
};

export default Report;
