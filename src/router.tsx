import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import { RoutePath } from "./types/routes";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>{/* ROTAS APENAS LOGADO AQUI!! */}
          <Route path={RoutePath.MANAGEMENT} element={<Products />} />
        </>
      ) : (
        <>
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.HOMEPAGE} element={<Home />} />
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
