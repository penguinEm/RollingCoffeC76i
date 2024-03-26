import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BarraDeNavegacion = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  /* funcion para logica del boton deslogear */
  const logout = () => {
    /* alerta de sweet */
    Swal.fire({
      title: "¿Estas seguro que deseas deslogear?",
      text: "No podras ingresar a la administracion de productos!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, salir!",
      cancelButtonText: "Permanecer logeado",
    }).then((result) => {
      if (result.isConfirmed) {
        /* Resetear el sesionstorage */
        setUsuarioLogeado("");
        /* borro la key */
        sessionStorage.removeItem("keyLoginRollingCoffe");
        /* redireciono a la pagina principal */
        navegacion("/");
      }
    });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src={logo}
            alt="Logo de la marca"
            className="img-fluid logoDimensiones py-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link hover-estilos" to={"/"}>
              Inicio
            </NavLink>

            {usuarioLogeado.length > 0 ? (
              <>
                <NavLink
                  end
                  className="nav-link hover-estilos "
                  to="/administrador"
                >
                  Administrador
                </NavLink>
                <Button
                  
                  className="nav-link hover-estilos rounded-0"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link hover-estilos" to="/login">
                Login
              </NavLink>
            )}

            <NavLink end className="nav-link hover-estilos" to="/registro">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraDeNavegacion;
