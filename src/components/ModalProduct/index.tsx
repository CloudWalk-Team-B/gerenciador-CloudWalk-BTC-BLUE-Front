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
  if(image==="")setImage(currentProduct.image)

  const updatedProduct:EditProduct = {
    name: name,
    image: image,
    description: description,
    category: category,
    price: price,
    inventory: inventory
  }

  const handleEdit = (id:string) =>{
    if(name !=="" && image !=="" && description !=="" && category !=="" && price > 0){
      Api.patch(`/product/${id}`, updatedProduct)
      .then((res)=>{
        handleGetProduct();
        toast.success("Produto atualizado com sucesso!");
        closeModal()
      })
      .catch(err=>toast.error("Falha ao atualizar o Produto"))
  }else{
      toast.error("Entradas Inválidas")
  }
  }
  
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
                    <S.ImageProduct src={currentProduct.image} />
                  </S.CardImageProduct>
                  <S.InfoProduct>
                    <S.FormEdit>
                      <S.InputForm>
                        <label>Nome:</label>
                        <input
                          type="string"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Imagem:</label>
                        <input
                          type="string"
                          value={image}
                          onChange={e => setImage(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Descrição:</label>
                        <input
                          type="string"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Categoria:</label>
                        <input
                          type="string"
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Preço:</label>
                        <input
                          type="number"
                          value={price}
                          onChange={e => setPrice(e.target.valueAsNumber)}
                        />
                      </S.InputForm>
                      <S.InputForm>
                        <label>Disponivel:</label>
                        <input
                          type="boolean"
                          value={inventory === true ? "Sim" : "Não"}
                          onChange={e => setInventory(!inventory)}
                        />
                      </S.InputForm>
                      <div>
                        <button
                          type="button"
                          onClick={() => handleEdit(currentProduct.id)}
                        >
                          Alterar
                        </button>
                      </div>
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
