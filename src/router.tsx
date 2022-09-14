import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products/Products";
import { RoutePath } from "./types/routes";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RoutePath.MANAGEMENT} element={<Products />} />
        <Route path={RoutePath.LOGIN} element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
