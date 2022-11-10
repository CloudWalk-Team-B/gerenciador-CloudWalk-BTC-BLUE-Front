import * as S from './styles';
import Logo from "../../assets/images/logoBranca.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandleModals } from '../../contexts/HandleModals';
import { useAuth } from '../../contexts/auth';
import { useUser } from '../../contexts/User';
import { Badge, Drawer } from '@mui/material';
import Cart from '../Cart';
import { useCart } from '../../contexts/Cart/useCart';


export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { isAdm, logged, logout } = useAuth()
  const { search, setSearch} = useHandleModals()
  const [ currentSearch, setCurrentSearch ] = useState<string>("")
  const navegate = useNavigate()
  const { user } = useUser()
 const {itemCount } = useCart()

 
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
              onClick={()=>navegate("/")}
            />
            <S.Name className="animate__animated animate__bounceIn animate__delay-1s	" onClick={()=>navegate("/")}>
              Capivara <br />
              Shop
            </S.Name>
            {
              logged && 
              <div>
                <section onClick={()=>navegate("/usuario")}>
                  <S.GearAccount/>
                  <p>{user.name.split(' ').slice(0, 1)} |</p>
                </section>
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
              <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart />
              </Drawer>
               {logged&& <S.ButtonBag onClick={() => setCartOpen(true)} >
               <Badge badgeContent={itemCount} color="primary">
                <S.Bag >{""}</S.Bag>
               </Badge>
               Sacola
              </S.ButtonBag>}
           {!logged && <S.Button onClick={()=>{navegate("/Login");setSearch("")}}><S.BtnUser/>Entrar</S.Button>}
           {isAdm && <S.Button onClick={()=>{navegate("/Products");setSearch("")}}><S.Gear/>Config</S.Button>}

          </S.Nav>
        </S.Content>
    </>
  );
}