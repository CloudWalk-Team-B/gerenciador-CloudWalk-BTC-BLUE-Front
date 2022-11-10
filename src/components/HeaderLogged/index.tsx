import * as S from "./style";
import Logo from "../../assets/images/logoBranca.png";
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
              onClick={()=>navigate("/")}
            />
            <S.Name className="animate__animated animate__bounceIn animate__delay-1s	" onClick={()=>navigate("/")}>
              Capivara <br />
              Shop
            </S.Name>
            <div>
                <section onClick={()=>navigate("/usuario")}>
                  <S.GearAccount/>
                  <p>{user.name.split(' ').slice(0, 1)} |</p>
                </section>
                <p className="getOut" onClick={() => {logout(); setSearch("")}}>| Sair</p>
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
              <div>
                <S.Updt/>
                <S.TextUpdate>
                  Atualização
                  em massa
                </S.TextUpdate>
              </div>
            </S.Update>
            <div
              className="animate__animated animate__slideInRight animate__delay-1s"
              onClick={()=>navigate("/")}
            >
              <S.Home></S.Home>
              <span>Home</span>
            </div>
          </S.Nav>
        </S.Content>
        {openModal(openUpdate)}
      </>
    );
  }
};

export default HeaderLogged;
