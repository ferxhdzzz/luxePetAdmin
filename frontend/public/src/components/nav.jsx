import React from "react"; // Importa React
import { Navbar, Nav, Container, Badge } from "react-bootstrap"; // Importa componentes de Bootstrap para crear la barra de navegación
import { Link } from "react-router-dom"; // Permite crear enlaces internos sin recargar la página
import { FaShoppingCart } from "react-icons/fa"; // Importa el ícono del carrito de compras
import "./nav.css"; // Importa estilos personalizados para esta barra

// Componente de navegación principal
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      {/* Contenedor de contenido dentro del navbar */}
      <Container>
        {/* Logo que también sirve como enlace a la página principal */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/luxe.svg"
            alt="LuxePet Logo"
            className="nav-logo"
          />{" "}
          {/* Saltos de línea opcionales, no tienen efecto visible por sí solos */}
          <br />
          <br />
        </Navbar.Brand>

        {/* Botón de colapsado en pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Contenedor de los enlaces que se despliega */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Enlaces alineados a la derecha */}
            <Nav.Link as={Link} to="/" className="fw-bold">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-bold">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="fw-bold">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-bold">
              Contáctanos
            </Nav.Link>
            <Nav.Link as={Link} to="/configuration" className="fw-bold">
              Perfil
            </Nav.Link>

            {/* Enlace al carrito con ícono */}
            <Nav.Link as={Link} to="/cart" className="fw-bold position-relative">
              <FaShoppingCart size={22} /> {/* Ícono del carrito de compras */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; // Exporta el componente para ser usado en otras partes de la app
