import { Button, Container } from "react-bootstrap";
import imgError404 from "../../assets/error404.png";

const Error404 = () => {
  return (
    <Container className="main text-center mt-3">
      <section>
        <img src={imgError404} alt="Error 404" className="img-fluid" />
        <div className="mb-5">
          <Button variant="success">Volver al inicio</Button>
        </div>
      </section>
    </Container>
  );
};

export default Error404;
