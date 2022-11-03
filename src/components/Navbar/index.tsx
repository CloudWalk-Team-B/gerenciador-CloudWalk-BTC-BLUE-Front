import * as S from './styles';
import Logo from "../../assets/images/logoBranca.png";
import Modal from "react-modal";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandleModals } from '../../contexts/HandleModals';
import { useAuth } from '../../contexts/auth';
import { User } from '../../types/interface';
import { useUser } from '../../contexts/User';


export const Navbar = () => {
  
  const { isAdm, logged, logout } = useAuth()
  const { search, setSearch} = useHandleModals()
  const [ currentSearch, setCurrentSearch ] = useState<string>("")
  const navegate = useNavigate()
  const { user } = useUser()


  const handleSearch = () => {
    navegate("/")
    setSearch(currentSearch)
  }

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
            {
              logged && 
              <div>
                <p>{user.name.split(' ').slice(0, 1)} |</p>
                <p className="getOut" onClick={() => {logout(); setSearch("")}}>| Sair</p>
              </div>
            }
            
          </S.BoxSoon>
          <S.Search>
            <S.TextSearch
              className="animate__animated animate__jackInTheBox animate__delay-1s"
              type="text"
              onChange={(e)=> setCurrentSearch(e.target.value)}
              placeholder={search===""?"Procurar...":search}
            ></S.TextSearch>
            <S.SearchIcon onClick={()=>handleSearch()}/>{" "}
          </S.Search>
          <S.Nav>
             <S.Btn to="/info">
               <S.Info/>Sobre nós 
              </S.Btn>
               {logged&& <S.Btn to="/">
                <S.Bag/>Sacola
              </S.Btn>}
           {!logged && <S.Button onClick={()=>{navegate("/Login");setSearch("")}}><S.BtnUser/>Entrar</S.Button>}
          </S.Nav>
        </S.Content>
    </>
  );
}