import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  /* Variables globales ----------------------------------------------------*/
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* Funciones ------------------------------------------------------------ */
  const loginValido = async () => {
    Swal.fire({
      title: "Login Correcto!",
      icon: "success",
    });
    reset();
  };

  /* Maquetado - log extra ------------------------------------------------*/
  return (
    <Container className="main">
      <article className="border border-success-subtle rounded-2 ">
        <h1 className="border-bottom border-success-subtle fs-4 py-2 px-3">
          Login
        </h1>
        <Form className="py-2 px-3" onSubmit={handleSubmit(loginValido)}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="color-inputs bg-greenLight"
              type="email"
              placeholder="admin@rollingcode.com"
              {...register("email", {
                required: "El email es obligatorio",
                minLength: {
                  value: 4,
                  message: "El email debe contener al menos 4 caracteres",
                },
                maxLength: {
                  value: 250,
                  message: "El email debe contener como máximo 250 caracteres",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingrese una dirección de correo electrónico válida",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contrasenia">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              className="color-inputs bg-greenLight"
              type="password"
              placeholder="********"
              {...register("contrasenia", {
                required: "La contraseña es obligatorio",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener como mínimo 8 caracteres",
                },
                maxLength: {
                  value: 25,
                  message: "La contraseña debe tener como máximo 25 caracteres",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.contrasenia?.message}
          </Form.Text>
          <div className="text-end">
            <Button className="border-0" type="submit" variant="success">
              Ingresar
            </Button>
          </div>
        </Form>
      </article>
    </Container>
  );
};

export default Login;
