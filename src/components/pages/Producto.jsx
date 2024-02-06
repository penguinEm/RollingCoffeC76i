import { Card, Button } from "react-bootstrap";
import producto1 from "../../assets/croissant.jpg";

const Producto = () => {
  return (
    <Card className="cardDimensiones px-0 mb-4 mt-3 cardEfectos ">
      <Card.Img variant="top" src={producto1} className="w-100 img-fluid" />
      <Card.Body>
        <Card.Title className="lead fw-normal text-green ms-2">
          Croissant de chocolate
        </Card.Title>
        <Card.Text className="cardScroll">
          <span>Descripción: </span> Delicioso croissant relleno de delicioso
          chocolate
        </Card.Text>
        <Card.Text className="fw-bold py-0">
          <span>Precio: $</span> 180
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
        <Button variant="success">Ver más</Button>
      </Card.Footer>
    </Card>
  );
};

export default Producto;
