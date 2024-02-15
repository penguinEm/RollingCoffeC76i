import { Container } from "react-bootstrap";
import Producto from "./producto/Producto";

const ContenedorCards = () => {
  return (
    <Container>
      <h1 className=" display-4 mt-5 border-bottom pb-3">Nuestros Productos</h1>
      <article className="row justify-content-center justify-content-sm-center justify-content-lg-between justify-content-md-between">
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
      </article>
    </Container>
  );
};

export default ContenedorCards;
