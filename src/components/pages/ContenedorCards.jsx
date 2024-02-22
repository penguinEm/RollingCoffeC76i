import { Container } from "react-bootstrap";
import Producto from "../pages/producto/Producto";
import { leerProductosApi } from "../../helpers/queries";
import { useState, useEffect } from "react";

const ContenedorCards = () => {
  /*1. VARIABLES GLOBALES------------------------------------------------------------------------------------------------ */
  const [productos, setProductos] = useState([]);

  /* 2. FUNCIONES ------------------------------------------------------------------------------------------------------- */
  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = async () => {
    try {
      const arrayProductosApi = await leerProductosApi();
      setProductos(arrayProductosApi);
    } catch {
      console.log(error);
    }
  };

  /* 3. LOGICA EXTRA Y MAQUETADO --------------------------------------------------------------------------------------- */
  return (
    <Container>
      <h1 className=" display-4 mt-5 border-bottom pb-3">Nuestros Productos</h1>
      <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto}></Producto>
        ))}
      </article>
    </Container>
  );
};

export default ContenedorCards;
