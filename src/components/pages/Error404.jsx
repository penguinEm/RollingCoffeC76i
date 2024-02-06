import { Container } from "react-bootstrap";
import imgError404 from "../../assets/error404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="main text-center mt-3">
      <section>
        <img src={imgError404} alt="Error 404" className="img-fluid" />
        <div className="mb-5">
          <Link to="/" className="btn - btn-success">
            <i class="bi bi-house-fill"> Inicio</i>
            
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default Error404;
