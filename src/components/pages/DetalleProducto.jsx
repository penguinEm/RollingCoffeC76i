import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProductosApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  /* 1. VARIABLES GLOBALES --------------------------------------------------------------------------------------------- */
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  /* 2. FUNCIONES ------------------------------------------------------------------------------------------------------- */
  useEffect(() => {
    cargarDetalles();
  }, []);

  const cargarDetalles = async () => {
    try {
      const respuesta = await obtenerProductosApi(id);

      if (respuesta.status === 200) {
        const productoBuscado = await respuesta.json();
        setProducto(productoBuscado);
      } else {
        Swal.fire({
          title: "Ocurrió un error!",
          text: "Intente nuevamente más tarde",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al cargar detalles:", error);
      Swal.fire({
        title: "Ocurrió un error!",
        text: "Intente nuevamente más tarde",
        icon: "error",
      });
    }
  };

  /* 3. MAQUETADO Y LOGICA EXT ------------------------------------------------------------------------------------------- */
  return (
    <Container className="mb-5 mt-3">
      <article className=" border border-1 rounded-2 border-secondary-subtle d-flex flex-column flex-lg-row flex-md-row">
        <div className="my-4 ms-lg-3 px-3 contenedorImgDetalle  h-auto order-lg-1 order-md-2">
          <h1 className="border-bottom border-secondary-subtle display-6 pb-4 text-green text-shadow">
            {producto.nombreProducto}
          </h1>
          <p className="lead">{producto.descripcion}</p>
          <h4>
            <span className="text-green">Categoria </span> {producto.categoria}
          </h4>
          <div className="d-flex align-items-center justify-content-between">
            <h4>
              <span className="text-green">Precio $</span>
              {producto.precio}
            </h4>
            <div>
              <Link className="btn btn-outline-success me-3 px-4" to="/">
                <i className="bi bi-arrow-counterclockwise"></i> <br></br>
                Inicio
              </Link>
              <Link className="btn btn-success border-0" to="*">
                <i className="bi bi-cart-check-fill"></i> <br></br>
                Comprar
              </Link>
            </div>
          </div>
        </div>
        <div className="contenedorImgDetalle pt-md-5 mt-md-5 mt-lg-0 pt-lg-0">
          <Image
            alt={producto.nombreProducto}
            src={producto.imagen}
            className="rounded-2 img-fluid imgDetalle"
          ></Image>
        </div>
      </article>
    </Container>
  );
};

export default DetalleProducto;
