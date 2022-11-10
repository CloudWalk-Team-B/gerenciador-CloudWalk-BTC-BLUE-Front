import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import { About } from "./Pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import { RoutePath } from "./types/routes";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Profilee from "./Pages/Profile";
import AuthPage from "./Pages/AuthPage";

const Router = () => {
  const { logged, isAdm } = useAuth();

  return (
    <Routes>
      {logged === true && isAdm === true ? (
        <>
          <Route path={RoutePath.HOMEPAGE} element={<Home />} />
          <Route path={RoutePath.MANAGEMENT} element={<Products />} />
          <Route path={RoutePath.ABOUTME} element={<About />} />
          <Route path={RoutePath.PROFILE} element={<Profilee />} />
        </>
      ) : logged === true && isAdm === false ? (
        <>
          <Route path={RoutePath.HOMEPAGE} element={<Home />} />
          <Route path={RoutePath.ABOUTME} element={<About />} />
          <Route path={RoutePath.PRODUCTDETAIL} element={<ProductDetail />} />
          <Route path={RoutePath.PROFILE} element={<Profilee />} />
        </>
      ) : (
        <>
          <Route path={RoutePath.HOMEPAGE} element={<Home />} />
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.CREATEACCOUNT} element={<CreateAccount />} />
          <Route path={RoutePath.ABOUTME} element={<About />} />
          <Route path={RoutePath.PRODUCTDETAIL} element={<ProductDetail />} />
          <Route path={RoutePath.PROFILE} element={<Profilee />} />
          <Route path={RoutePath.AUTHROUTE} element={<AuthPage />} />
        </>
      )}
      <Route path="*" element={<Navigate to={isAdm ? "/produtos" : "/"} />} />
      {/* recurso acima para direcionar url fora de padrão */}
    </Routes>
  );
};

export default Router;
