import { Table } from "react-bootstrap";
import ItemTabla from "./producto/ItemTabla";

const ContenedorTabla = ({productos, setProductos}) => {
  return (
    <Table striped bordered hover className="mb-5 mt-3">
      <thead className="text-center">
        <tr>
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de la imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
        productos.map((producto)=> <ItemTabla key={producto.id} producto={producto} setProductos={setProductos}></ItemTabla>)
        }
      </tbody>
    </Table>
  );
};

export default ContenedorTabla;
