import { Link } from "react-router-dom";


const ItemTabla = ({producto}) => {
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
        <Link className="btn btn-danger" to="*">
          <i className="bi bi-trash"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ItemTabla;
