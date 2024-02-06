import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink } from "react-router-dom";

const BarraDeNavegacion = () => {
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
            <NavLink end className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/administrador">Administrador</NavLink>
            <NavLink end className="nav-link" to="/login">Login</NavLink>
            <NavLink end className="nav-link" to="*">Registro</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraDeNavegacion;
