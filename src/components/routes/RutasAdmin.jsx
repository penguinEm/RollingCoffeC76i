import { Route, Routes } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioCrear from "../pages/producto/FormularioCrear"


/* Componente con las rutas a proteger */
const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={
            <FormularioCrear
              editar={false}
              titulo={"Nuevo Producto"}
            ></FormularioCrear>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioCrear
              editar={true}
              titulo={"Editar producto"}
            ></FormularioCrear>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
