import { Link } from "react-router-dom";
import Swal from "sweetalert2"
import { borrarProductoApi } from "../../../helpers/queries";

const ItemTabla = ({producto}) => {

  /* Funciones------------- */
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro que deseas eliminar el producto?",
      text: "No puedes revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {

        borrarProductoApi(producto.id)
        

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  /* Maquetado y logica extra */
  return (
    <tr>
        {/* Codigo */}
      <td className="text-center">{producto.id}</td>
      {/* Producto */}
      <td>
        {producto.nombreProducto}
      </td>
      {/* Precio */}
      <td className="text-center">
        <span>$</span>{producto.precio}
      </td>
      {/* Url de la img */}
      <td className="text-center">
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="tablaImagenDimensiones img-fluid img-thumbnail"
        />
      </td>
      {/* Categoria */}
      <td>{producto.categoria}</td>
      {/* Opciones */}
      <td className="text-center">
        <Link className="me-1 btn btn-warning" to="*">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Link className="btn btn-danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ItemTabla;
