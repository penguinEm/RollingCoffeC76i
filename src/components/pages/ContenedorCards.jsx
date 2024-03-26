import { Container, Alert } from "react-bootstrap";
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
      if (!arrayProductosApi) {
        return setProductos([]);
      }
      setProductos(arrayProductosApi);
    } catch {
      console.log(error);
    }
  };

  /* 3. LOGICA EXTRA Y MAQUETADO --------------------------------------------------------------------------------------- */
  return (

    //todo: probar un loading (ver proyecto Simpsons)
    <Container>
      {productos.length !== 0 && (
        <h1 className="display-4 mt-5 border-bottom pb-3">
          Nuestros Productos
        </h1>
      )}
      { productos.length === 0 ? (
        <Alert variant="danger" className="mt-3">
          No se pudieron cargar los productos en este momento. Intente
          nuevamente más tarde.
        </Alert>
      ) : (
        <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
          {productos.map((producto) => (
            <Producto key={producto._id} producto={producto}></Producto>
          ))}
        </article>
      )}
    </Container>
  );
};

export default ContenedorCards;
