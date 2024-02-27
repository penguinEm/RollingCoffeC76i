import Inicio from "./components/pages/Inicio";
import BarraDeNavegacion from "./components/common/BarraDeNavegacion";
import Footer from "./components/common/Footer";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import FormularioCrear from "./components/pages/producto/FormularioCrear";
import Login from "./components/pages/user/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";

function App() {
  /* quiero checkear si alguien se ha logeado */
  const usuario =
    JSON.parse(sessionStorage.getItem("keyLoginRollingCoffe")) || "";
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return (
    <BrowserRouter>
      <BarraDeNavegacion usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></BarraDeNavegacion>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>

        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
        ></Route>

        <Route
          exact
          path="/administrador/detalle-producto/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
