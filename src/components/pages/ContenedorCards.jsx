import { Container } from "react-bootstrap";
import Producto from "./Producto";

const ContenedorCards = () => {
  return (
    <Container>
      <h1 className=" display-4 mt-5 border-bottom pb-3">Nuestros Productos</h1>
      <article className="row justify-content-between">
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
      </article>
    </Container>
  );
};

export default ContenedorCards;
