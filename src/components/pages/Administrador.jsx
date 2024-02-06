import { Button, Container } from "react-bootstrap";

const Administrador = () => {
  return (
    <Container className="main ">
      <section className="d-flex align-items-center accordion-collapsemt-5 border-bottom pb-3">
        <h1 className="display-4 ">
          Productos Disponibles
        </h1>
        <div className="ms-auto">
        <Button>
          <i className="bi bi-file-earmark-plus-fill"></i>
        </Button>
        </div>
      </section>
    </Container>
  );
};

export default Administrador;
