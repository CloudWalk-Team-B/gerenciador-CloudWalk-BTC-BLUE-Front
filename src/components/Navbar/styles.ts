import styled from 'styled-components';
import { FaRegUser, FaHome } from "react-icons/fa";
interface INav {
  open: boolean;
}

export const StyledBurger = styled.div<INav>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  font-family: 'Zilla Slab', sans-serif;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`

export const Menus = styled.div<INav>`
    width: 2rem;
    height: 0.25rem;
    top:0;
    background-color: #FFF;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`

export const Nav = styled.nav`
  font-family: 'Zilla Slab', sans-serif;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #601A4A;
  align-items: center;
  position: relative;
  @media (max-width: 678px) {
    width: 100%;
  }
`

export const Ul = styled.ul<INav>`
  font-family: 'Zilla Slab', sans-serif;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  height: 110px;
  a {
    text-decoration: none;
    text-transform: none;
    color: #FFF;
    cursor: pointer;
    &:hover {
      color: 	#D3D3D3;
    }
  }
  @media (max-width: 768px) {

    flex-flow: column nowrap;
    background-color: #601A4A;
    transform: ${(props) => props.open ? 'translateY(0)' : 'translateY(-23.1rem)'};
    top: -17px;
    bottom: 0;
    height: 22rem;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: space-around;
  }
`

export const Li = styled.li`
  padding: 18px 10px;
  outline: none;
  @media (max-width: 768px) {
    color: #FFF;
    margin-right: 34px;
    &:hover {
      border-bottom :solid 1px   #D3D3D3 ; 
      color: #D3D3D3;
    }
}
`

export const Logo = styled.img`
  margin: 20px 50px 20px 7%;
  width: 160px;
  height: 70px;
  object-fit: contain;
  @media (max-width: 1250px) {
    margin: 20px 50px 20px 5%;
  }
`

export const LogoUl = styled.img`
  margin: 20px 50px 20px 5%;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 160px;
    height: 70px;
    object-fit: contain;
  }
`

export const IconLogin = styled(FaRegUser)`
  width: 1.3rem;
  height: 1.3rem;
  border: solid 1px #FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  pointer-events: none;
  object-fit: contain;
  animation: Spin infinite 20s linear;
`