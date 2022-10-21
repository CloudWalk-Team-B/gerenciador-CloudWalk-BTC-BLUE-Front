import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useProducts } from "../../contexts/product";
import img from "../../assets/images/logoRoxa.png";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { EditProduct, Product } from "../../types/interface";
import { toast } from "react-hot-toast";

const Moddal = () => {

  const { openProduct, setOpenProduct } = useHandleModals();
  const { handleGetProduct } = useProducts();

  const currentProduct:Product = (JSON.parse(localStorage.getItem("currentProduct") || ""))

  const [ name, setName] = useState<string>(currentProduct.name)
  const [ image, setImage ] = useState<string>(currentProduct.image)
  const [ description, setDescription] = useState<string>(currentProduct.description)
  const [ category, setCategory] = useState<string>(currentProduct.category)
  const [ price, setPrice] = useState<number>(currentProduct.price)
  const [ inventory, setInventory] = useState<boolean>(currentProduct.inventory)
  
  function closeModal() {
    setOpenProduct(false);
  }

  // const [values, setValues] = useState<EditProduct>({
  //   name: "",
  //   image: "",
  //   description: "",
  //   category: "",
  //   price: 0,
  //   inventory: false,
  // });


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


  // const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value.length <= 1) {
  //     console.log(e.target.name, e.target.placeholder);
  //     setValues((values: EditProduct) => ({
  //       ...values,
  //       [e.target.name]: e.target.placeholder,
  //     }));
  //   } else
  //     setValues((values: EditProduct) => ({
  //       ...values,
  //       [e.target.name]: e.target.value,
  //     }));
  // };

  // let HandleEdit = async (productId: any) => {
  //   try {
  //     const res = await Api.patch(`/product/${productId}`, values);
  //     console.log("FFFFFOOOOOIIIII");
  //     return res.data;
  //   } catch (error: any) {
  //     swal({
  //       title: "Error",
  //       text: `${error.message}`,
  //       icon: "error",
  //       timer: 6000,
  //     });
  //     return error;
  //   }
  // };

  const handleEdit = (id:string) =>{
    const data:Product =  currentProduct
    Api.patch(`product:${id}`, data)
      .then(()=>{
        handleGetProduct();
        setOpenProduct(false);
        toast.success("Produto Atualizado")
      })
      .catch(()=>{})
  }

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
          {
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
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Imagem:</label>
                        <input
                          name="image"
                          value={image}
                          onChange={e => setImage(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Descrição:</label>
                        <input
                          id="description"
                          name="description"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Categoria:</label>
                        <input
                          name="category"
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Preço:</label>
                        <input
                          name="price"
                          // type="number"
                          value={`R$ ${price}`}
                          onChange={e => setPrice(e.target.valueAsNumber)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Disponivel:</label>
                        <input
                          name="inventory"
                          value={inventory === true ? "Sim" : "Não"}
                          onChange={e => setPrice(e.target.valueAsNumber)}
                        />
                      </S.InputForm>
                      <button
                        type="button"
                        onClick={() => handleEdit(currentProduct.id)}
                      >
                        Alterar
                      </button>
                    </S.FormEdit>
                  </S.InfoProduct>
                </>
          }
        </S.InfoProductCard>
      </Modal>
    </>
  );
};

export default Moddal;
