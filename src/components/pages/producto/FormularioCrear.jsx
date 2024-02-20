import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoApi } from "../../../helpers/queries";
import Swal from "sweetalert2";

const AdministradorCrear = () => {
  /* Variables globales --------------- */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* Funciones ------------------------ */
  const productoValidado = async (producto) => {
    console.log(producto);
    const respuesta = await crearProductoApi(producto);
    if(respuesta.status === 201){
      Swal.fire({
        title: "Producto creado!",
        text:`El producto ${producto.nombreProducto} fue creado correctamente`,
        icon: "success"
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text:`Intente nuevamente`,
        icon: "error"
      });
    }
  };

  /* Logica extra y maquetado ---------- */
  return (
    <Container className=" main px-lg-5 py-5 ">
      <h1 className="display-1 mx-5 pb-4 border-bottom border-secondary-subtle">
        Nuevo Producto
      </h1>
      <Form
        className=" rounded-2 px-lg-5 pt-3 pb-5"
        onSubmit={handleSubmit(productoValidado)}
      >
        <Form.Group
          className="mb-3 border border-1 p-1 border-success-subtle rounded-1"
          controlId="producto"
        >
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            className="color-inputs"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como mínimo 2 caracteres para el nombre del producto",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingrsar como máximo 50 caracteres para el nombre del producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3 border border-1 p-1 border-success-subtle rounded-1"
          controlId="precio"
        >
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            className="color-inputs"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 10,
                message: "El monto del producto debe ser mayor a $10",
              },
              max: {
                value: 10000,
                message: "El monto del producto debe ser menor a $10.000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-success-subtle rounded-1"
          controlId="url"
        >
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="color-inputs"
            {...register("imagen", {
              required:
                "El campo para ingresar la URL de la imagen es obligatorio",
              /*  pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                message: "Debe ingresar una URL válida (jpg|gif|png)",
              }, */
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-success-subtle rounded-1"
          controlId="categoria"
        >
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            aria-label="select"
            /* required */
            className="color-inputs text-secondary"
            {...register("categoria", {
              required: "Seleccionar la categoria del producto es obligatorio",
            })}
          >
            <option value={""}>Seleccione una opcion</option>
            <option value={"Panaderia"}>Panaderia</option>
            <option value={"Cafeteria"}>Cafeteria</option>
            <option value={"Reposteria"}>Reposteria</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-success-subtle rounded-1"
          controlId="descripcionBreve"
        >
          <Form.Label>Descripcion breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromática"
            className="color-inputs"
            {...register("descripcionBreve", {
              required: "La descripcion breve del producto es obligartoria",
              minLength: {
                value: 4,
                message: "Debe ingresar como mínimo 4 caracteres",
              },
              maxLength: {
                value: 250,
                message: "Debe ingresar como máximo 250 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 border border-1 p-1 border-success-subtle rounded-1"
          controlId="descripcionAmplia"
        >
          <Form.Label>Descripcion detallada*</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="El café es una bebida aromática y vigorizante que se obtiene de los granos tostados de la planta de café. Su sabor distintivo y su rica historia lo convierten en una de las bebidas más populares y apreciadas en todo el mundo. Al ser versátil, el café se presenta en una amplia variedad de formas, desde el clásico espresso hasta las elaboradas mezclas de cafés gourmet."
            className="formularioTextArea color-inputs"
            {...register("descripcion", {
              required: "La descripcion detallada del producto es obligartoria",
              minLength: {
                value: 30,
                message: "Debe ingresar como mínimo 30 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como máximo 1.000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-end">
          <Button type="submit" variant="success" className="border-0">
            Guardar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AdministradorCrear;
