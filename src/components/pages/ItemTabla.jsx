import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import producto1 from "../../assets/croissant.jpg";

const ItemTabla = () => {
  return (
    <tr>
        {/* Codigo */}
      <td className="text-center">1</td>
      {/* Producto */}
      <td>Croissant de Chocolate</td>
      {/* Precio */}
      <td className="text-center">
        <span>$</span>180
      </td>
      {/* Url de la img */}
      <td className="text-center">
        <img
          src={producto1}
          className="img-fluid tablaImagenDimensiones img-thumbnail"
        />
      </td>
      {/* Categoria */}
      <td>Reposteria</td>
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
