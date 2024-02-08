import { Container, Image } from "react-bootstrap";
import producto1 from "../../assets/croissant.jpg";
import { Link } from "react-router-dom";

const DetalleProducto = () => {
  return (
    <Container className="mb-5 mt-3">
      <article className=" border border-1 rounded-2 border-secondary-subtle d-flex flex-column flex-lg-row flex-md-row">
        <div className="my-4 ms-lg-3 px-3 contenedorImgDetalle  h-auto order-lg-1 order-md-2">
          <h1 className="border-bottom border-secondary-subtle display-6 pb-4">
            Croissant
          </h1>
          <p className="lead">
            Una croissant es un tipo de panadería de origen francés que se
            caracteriza por su masa hojaldrada y su forma de media luna. Está
            hecha con una masa laminada que incorpora capas alternas de
            mantequilla y masa de pan, lo que le confiere su textura escamosa y
            crujiente. La croissant tradicional es ligera y aireada por dentro,
            con un exterior dorado y crujiente. Se sirve comúnmente en el
            desayuno o como acompañamiento en diversas comidas. Su sabor
            característico y su elaboración cuidadosa hacen de la croissant una
            delicia reconocida y apreciada en todo el mundo.
          </p>
          <h4>
            <span className="text-green">Categoria: </span> Panaderia
          </h4>
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              <span className="text-green">Precio: $</span>180
            </h4>
            <div>
            <Link className="btn btn-outline-success me-3 px-4" to="/">
              <i class="bi bi-arrow-counterclockwise"></i> <br></br>
              Inicio
            </Link>
            <Link className="btn btn-success border-0" to="*">
              <i class="bi bi-cart-check-fill"></i> <br></br>
              Comprar
            </Link>
            </div>
          </div>
        </div>
        <div className="contenedorImgDetalle pt-md-5 mt-md-5 mt-lg-0 pt-lg-0">
          <Image
            src={producto1}
            className="rounded-2 img-fluid imgDetalle"
          ></Image>
        </div>
      </article>
    </Container>
  );
};

export default DetalleProducto;
