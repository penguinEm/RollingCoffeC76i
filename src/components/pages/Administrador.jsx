import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContenedorTabla from "./ContenedorTabla";


const Administrador = () => {
  return (
    <Container className="main ">
      <section className="d-flex align-items-center accordion-collapsemt-5 border-bottom pb-3">
        <h1 className="display-4 ">Productos Disponibles</h1>
        <div className="ms-auto">
          <Link className="btn btn-primary" to="/administrador/crear">
            <i className="bi bi-file-earmark-plus-fill"></i>
          </Link>
        </div>
      </section>
      <section>
        <ContenedorTabla></ContenedorTabla>
      </section>
    </Container>
  );
};

export default Administrador;
