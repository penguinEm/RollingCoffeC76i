import Inicio from "./components/pages/Inicio";
import BarraDeNavegacion from "./components/common/BarraDeNavegacion"
import Footer from "./components/common/Footer";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";



function App() {
  return (
    <>
      <BarraDeNavegacion></BarraDeNavegacion>
      <Inicio></Inicio>
      {/* <Administrador></Administrador> */}
      {/* <Error404></Error404> */}
      <Footer></Footer>
    </>
  );
}

export default App;
