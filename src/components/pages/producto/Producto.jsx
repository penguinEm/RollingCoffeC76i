import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Producto = ({ producto }) => {
  return (
    <Card className="cardDimensiones px-0 mb-4 mt-3 cardEfectos ">
      <Card.Img
        variant="top"
        alt={producto.nombreProducto}
        src={producto.imagen}
        className="img-fluid cardImgDimensiones"
      />
      <Card.Body>
        <Card.Title className="lead fw-normal text-green ms-2 text-shadow">
          {producto.nombreProducto}
        </Card.Title>
        <Card.Text className="cardScroll">
          <span>Descripción: </span> {producto.descripcionBreve}
        </Card.Text>
        <Card.Text className="fw-bold py-0">
          <span>Precio: $</span> {producto.precio}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Link
          className="btn btn-success border-0"
          to={`/administrador/detalle-producto/${producto._id}`}
        >
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Producto;
