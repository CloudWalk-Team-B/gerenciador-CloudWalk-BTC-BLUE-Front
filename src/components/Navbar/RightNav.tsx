import * as S from './styles';
import Logo from '../../assets/images/logoBranca.png';
import { Link } from 'react-router-dom';

type Props = {
  open: boolean;
};

export const  RightNav = (props: Props) => {
  return (
    <>
      <S.Ul open={props.open}>
        <Link to='/'>
          <S.LogoUl src={Logo} alt={'Capivara Pets'} />
        </Link>
        <Link to='/info'>
          <S.Li>Sobre</S.Li>
        </Link>
        <Link
          to='/login'
        >
          <S.Li><S.IconLogin/></S.Li>
        </Link>
      </S.Ul>      
      </>
  );
}
