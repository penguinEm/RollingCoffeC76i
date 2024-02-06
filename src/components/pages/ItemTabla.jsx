import { Button } from "react-bootstrap";
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
        <Button variant="warning" className="me-1">
          <i class="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i class="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTabla;
