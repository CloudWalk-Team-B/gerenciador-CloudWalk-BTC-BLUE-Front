import React, { useState } from "react";
import * as S from "./style";
import Modal from "react-modal";
import { useHandleModals } from "../../contexts/HandleModals";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { EditProduct} from "../../types/interface";
import Logo from "../../assets/images/logoRoxa.png";
import { useProducts } from "../../contexts/product";

const ModdalNewProduct = () => {
  const { handleGetProduct, categories }= useProducts()
  const { openNewProduct, setOpenNewProduct} = useHandleModals();
  const closeModal = () => {
    setOpenNewProduct(false);
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
      height: "60vh",     
      
    },
  };

  const[code, setCode]=useState<number>(0)
  const[name, setName]=useState<string>("")
  const[image, setImage]=useState<string>(Logo)
  const[description, setDescription]=useState<string>("")
  const[price, setPrice]=useState<number>(0)
  const[inventory, setInventory]=useState<boolean>(true)
  const[category, setCategory]=useState<string>(categories[0])
  if(image==="")setImage(Logo)

  const data:EditProduct = {
    code: code,
    name: name,
    image: image,
    description: description,
    category: category,
    price: price,
    inventory: inventory
  }

  const handleRegister = () =>{
    if(code>=0 && name!=="" && image!=="" && description!=="" && price>0 && category!==""){
    Api.post("/product", data).then(()=>{
      toast.success("Produco cadastrado com sucesso");
      handleGetProduct()
    }).catch(()=>{
      toast.error("Erro ao cadastrar produto")
    })
    }else{
    toast.error("Preencha todos os campos")
    }
  }

  const handleCategory = (prop:string) =>{
    setCategory(prop)
  }

  return (
    <>
      <Modal
        isOpen={openNewProduct}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <S.TitleComponent>
          Adicionar novo Produto
        </S.TitleComponent>
        <S.MainComponent>
          <section>
            <img src={image} alt="" />
              <div>
                <input type="number" placeholder="Código" onChange={e => setCode(e.target.valueAsNumber)}/>
                <input type="text" placeholder="Nome do Produto" onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Imagem" onChange={e => setImage(e.target.value)}/>
                <input type="text" placeholder="Descrição" onChange={e => setDescription(e.target.value)}/>
                <input type="number" placeholder="Preço" onChange={e => setPrice(e.target.valueAsNumber)}/>
                <input type="text" value={inventory === true ? "Produto Disponível" : "Fora de Estoque"} onChange={e=> setInventory(!inventory)}/>
                <select onChange={e => handleCategory(e.target.value)}>
                  {categories.map(element=>{
                    return(
                      <option value={element}>{element}</option>
                    )
                  })}
                </select>
              </div>
          </section>
              <button onClick={()=>handleRegister()}>
                Cadastrar
              </button>
        </S.MainComponent>
      </Modal>
    </>
  );
};

export default ModdalNewProduct;
