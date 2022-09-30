import * as S from './styles';
import Logo from '../../assets/images/logoBranca.png';
import {Burger} from './Burger';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  children?: ChildNode;
};

export const Navbar = (props: Props) => {
  
  return (
    <>
      <S.Nav>
        <Link to='/'>
           <S.Logo src={Logo} alt='Capivara Pets' />
        </Link>
      </S.Nav>
      <Burger />
      {props.children}
    </>
  );
}