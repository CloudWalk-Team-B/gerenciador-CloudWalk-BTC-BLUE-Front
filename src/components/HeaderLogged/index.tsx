import * as S from "./style";
import Logo from "../../assets/images/logoBranca.png";
import { FiPlus } from "react-icons/fi";
import { useAuth } from "../../contexts/auth";
import { useHandleModals } from "../../contexts/HandleModals";
import ModalUpdate from "../ModalUpdateMany";
import { useNavigate } from "react-router-dom";

const HeaderLogged = (props: any) => {
  const { openUpdate, setOpenUpdate, search, setSearch } = useHandleModals();
  const user = JSON.parse(localStorage.getItem("user") || "");

  const openModal = (open: boolean) => {
    if (open === true) {
      return <ModalUpdate />;
    }
  };

  const navigate = useNavigate();

  const { logout } = useAuth();

  if (props.header === "add") {
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
            <div>
              <p> {user.name.split(" ").slice(0, 1)} |</p>
              <p
                className="getOut"
                onClick={() => {
                  logout();
                  setSearch("");
                }}
              >
                | Sair
              </p>
            </div>
          </S.BoxSoon>
          <S.Search>
            <S.TextSearch
              className="animate__animated animate__jackInTheBox animate__delay-1s"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Procurar..."
            ></S.TextSearch>
          </S.Search>
          <S.Nav>
            <S.Update
              className="animate__animated animate__slideInRight animate__delay-1s"
              onClick={() => setOpenUpdate(!openUpdate)}
            >
              <S.TextUpdate>
                Atualização <br />
                em massa
              </S.TextUpdate>
              <FiPlus color="white" fontSize="1.5em" />
            </S.Update>
            <span onClick={() => navigate("/usuario")}>Perfil</span>
          </S.Nav>
        </S.Content>
        {openModal(openUpdate)}
      </>
    );
  }
  return (
    <>
      <S.Content className="animate__animated animate__slideInDown">
        <S.BoxSoon>
          <S.Soon
            className="animate__animated animate__slideInLeft animate__delay-1s"
            src={Logo}
            onClick={() => {
              logout();
            }}
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
            placeholder="Procurar..."
          ></S.TextSearch>
        </S.Search>
        <S.Update className="animate__animated animate__slideInRight animate__delay-1s">
          <S.TextUpdate>
            Atualização <br />
            em massa
          </S.TextUpdate>
          <FiPlus color="white" fontSize="1.5em" />
        </S.Update>
        <S.Info />
        <S.Home />
      </S.Content>
      {openModal(openUpdate)}
    </>
  );
};

export default HeaderLogged;
