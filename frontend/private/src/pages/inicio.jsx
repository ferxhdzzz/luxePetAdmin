import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import "./Inicio.css";


const Inicio = () => {
  return (

    <Layout>
      <section className="hero-section">
        <section className="hero-container">
          <div className="hero-text">
            <h1>Todo lo que tu mascota necesita en un solo lugar!</h1>
            <p>
              Bienvenido al sitio de administrado  es un placer tenerte con nosotros.
              Ingresa para con la administracion de una de las mejores tiendas del pais

            </p>
            <Button as={Link} to="/Login" className="btn-customm">
              Comenzar administracion
            </Button> {/* Botón que redirige al registro/compras */}
          </div>
          <div className="hero-image">
            <img src="/Perrito.png" alt="Perro" />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Inicio;
