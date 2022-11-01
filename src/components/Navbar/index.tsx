import * as S from './styles';
import Logo from "../../assets/images/logoBranca.png";
import Modal from "react-modal";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandleModals } from '../../contexts/HandleModals';


export const Navbar = () => {
  
  const { search, setSearch} = useHandleModals()
  const navegate = useNavigate()

  return (
    <>
      <S.Content className="animate__animated animate__slideInDown">
          <S.BoxSoon>
            <S.Soon
              className="animate__animated animate__slideInLeft animate__delay-1s"
              src={Logo}
            />
            <S.Name className="animate__animated animate__bounceIn animate__delay-1s	">
              Capivara <br />
              Shop
            </S.Name>
          </S.BoxSoon>
          <S.Search>
            <S.TextSearch
              className="animate__animated animate__jackInTheBox animate__delay-1s"
              type="text"
              onChange={(e)=> setSearch(e.target.value)}
              placeholder="Procurar..."
            ></S.TextSearch>
          </S.Search>
          <S.Nav>
             <S.Btn to="/info">
               <S.Info/> 
              </S.Btn>
               <S.Btn to="/">
                <S.Bag/>
              </S.Btn>
           <S.Button onClick={()=>{navegate("/Login");setSearch("")}}><S.BtnUser/>Entrar</S.Button>
          </S.Nav>
        </S.Content>
    </>
  );
}