import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import swal from "sweetalert";
import Api from "../../services/api";
import { EditProduct } from "../../types/interface";

const Moddal = (idProduct: any) => {
  const { openProduct, setOpenProduct } = useHandleModals();
  const [values, setValues] = useState<EditProduct>({
    name: "",
    image: "",
    description: "",
    category: "",
    price: 0,
    inventory: false,
  });

  function closeModal() {
    setOpenProduct(false);
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

  const { products, handleGetProduct } = useProducts();
  // console.log(products);

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 1) {
      console.log(e.target.name, e.target.placeholder);
      setValues((values: EditProduct) => ({
        ...values,
        [e.target.name]: e.target.placeholder,
      }));
    } else
      setValues((values: EditProduct) => ({
        ...values,
        [e.target.name]: e.target.value,
      }));
  };

  let HandleEdit = async (productId: any) => {
    try {
      const res = await Api.patch(`/product/${productId}`, values);
      console.log("FFFFFOOOOOIIIII");
      return res.data;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
      return error;
    }
  };

  return (
    <>
      <Modal
        isOpen={openProduct}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleModal>Infomações</S.TitleModal>
        <S.InfoProductCard>
          {products.map<React.ReactNode>((element, index) => {
            if (element.id == idProduct.idProduct) {
              return (
                <>
                  <S.CardImageProduct>
                    <S.ImageProduct src={img} />
                  </S.CardImageProduct>
                  <S.InfoProduct>
                    <S.FormEdit>
                      <S.InputForm>
                        <label>Nome:</label>
                        <input
                          name="name"
                          placeholder={element.name}
                          onChange={handleChangesValues}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Imagem:</label>
                        <input
                          name="image"
                          placeholder={element.image}
                          onChange={handleChangesValues}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Descrição:</label>
                        <input
                          id="description"
                          name="description"
                          placeholder={element.description}
                          onChange={handleChangesValues}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Categoria:</label>
                        <input
                          name="category"
                          placeholder={element.category}
                          onChange={handleChangesValues}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Preço:</label>
                        <input
                          name="price"
                          // type="number"
                          placeholder={`R$ ${element.price}`}
                          onChange={handleChangesValues}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Disponivel:</label>
                        <input
                          name="inventory"
                          placeholder={
                            element.inventory === true ? "Sim" : "Não"
                          }
                          onChange={handleChangesValues}
                        />
                      </S.InputForm>
                      <button
                        type="button"
                        onClick={() => HandleEdit(element.id)}
                      >
                        Alterar
                      </button>
                    </S.FormEdit>
                  </S.InfoProduct>
                </>
              );
            }
          })}
        </S.InfoProductCard>
      </Modal>
    </>
  );
};

export default Moddal;
