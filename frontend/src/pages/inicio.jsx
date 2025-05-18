import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <section className="hero-section">
      <section className="hero-container">
        <div className="hero-text">
          <h1>Todo lo que tu mascota necesita en un solo lugar!</h1>
          <p>
            Bienvenido al sitio web de Luxe Pet, es un placer tenerte con nosotros.
            Ingresa a comenzar tu compra para tener la mejor experiencia para ti y tu mascota.
          </p>
          <button as={Link} to="/Register" className="btn-custom">
            Comienza tu compra
          </button>
        </div>
        <div className="hero-image">
          <img src="/Perro.png" alt="Perro" />
        </div>
      </section>
    </section>
  );
};

export default Inicio;
