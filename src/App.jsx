import Inicio from "./components/pages/Inicio";
import BarraDeNavegacion from "./components/common/BarraDeNavegacion";
import Footer from "./components/common/Footer";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import FormularioCrear from "./components/pages/producto/FormularioCrear";
import Login from "./components/pages/user/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BarraDeNavegacion></BarraDeNavegacion>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador/*"
          element={<Administrador></Administrador>}
        ></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
     

        {/* A esta ruta de EDITAR le agregamos el parametro para hacer el edit */}
       
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
