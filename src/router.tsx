import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import { About } from "./Pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import CreateAccount from "./Pages/CreateAccount/CreateAccount"
import { RoutePath } from "./types/routes";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>{/* ROTAS APENAS LOGADO AQUI!! */}
          <Route path={RoutePath.MANAGEMENT} element={<Products />} />
          <Route path={RoutePath.HOMEPAGE} element={<Home />} />
          <Route path={RoutePath.ABOUTME} element={<About/>} />
        </>
      ) : (
        <>
          <Route path={RoutePath.CREATEACCOUNT} element={<CreateAccount />} />
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.HOMEPAGE} element={<Home />} />
          <Route path={RoutePath.ABOUTME} element={<About/>} />
        </>
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? "/produtos" : "/"} />}
      />
      {/* recurso acima para direcionar url fora de padrão */}
    </Routes>
  );
};

export default Router;
