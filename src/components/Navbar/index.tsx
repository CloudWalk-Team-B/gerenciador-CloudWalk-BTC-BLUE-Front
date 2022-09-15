import * as S from './styles';
import Logo from '../../assets/images/logoBranca.png';
import {Burger} from './Burger';

type Props = {
  children?: ChildNode;
};

export const Navbar = (props: Props) => {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt='Gustavo Scarpim' />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  );
}