import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContenedorTabla from "./ContenedorTabla";
import { useState, useEffect } from "react";
import { leerProductosApi } from "../../helpers/queries";

const Administrador = () => {
  /* Variables globales---------------- */
  const [productos, setProductos] = useState([]);

  /* Funciones ------------------------ */
  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = async () => {
    try {
      const listaProductosApi = await leerProductosApi();
      setProductos(listaProductosApi);
    } catch (error) {
      alert("Intente mas tarde");
    }
  };

  /* Logica extra y ,maquetado */
  return (
    <Container className="main ">
      <section className="d-flex align-items-center accordion-collapsemt-5 border-bottom pb-3">
        <h1 className="display-4 ">Productos Disponibles</h1>
        <div className="ms-auto">
          <Link className="btn btn-primary" to="/crear">
            <i className="bi bi-file-earmark-plus-fill"></i>
          </Link>
        </div>
      </section>
      <section>
        <ContenedorTabla productos={productos}></ContenedorTabla>
      </section>
    </Container>
  );
};

export default Administrador;
