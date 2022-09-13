import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import { RoutePath } from "./types/routes";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={RoutePath.MANAGEMENT} element={<Products />} />
      </Routes>
    </>
  );
};

export default Router;
