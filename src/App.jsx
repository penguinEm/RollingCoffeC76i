import Inicio from "./components/pages/Inicio";
import BarraDeNavegacion from "./components/common/BarraDeNavegacion"
import Footer from "./components/common/Footer";
import ContenedorLista from "./components/pages/ContenedorLista";
import Administrador from "./components/pages/Administrador";



function App() {
  return (
    <>
      <BarraDeNavegacion></BarraDeNavegacion>
      {/* <Inicio></Inicio> */}
      <Administrador></Administrador>
      <Footer></Footer>
    </>
  );
}

export default App;
