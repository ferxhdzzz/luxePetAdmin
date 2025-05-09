import React from "react";
import { Link } from "react-router-dom"; // Permite navegación entre rutas sin recargar la página
import { FaShoppingCart } from "react-icons/fa"; // Ícono de carrito (aunque no se usa en este componente)
import "./Inicio.css"; // Estilos específicos del HeroNav

// Componente principal
const Inicio = () => {
  return (
    <>
      {/* Sección principal tipo "Hero" (destacada al inicio del sitio) */}
      <section className="hero-section">
        <section className="hero-container">
          {/* Columna de texto */}
          <div className="hero-text">
            <h1>Todo lo que tu mascota necesita en un solo lugar!</h1> {/* Título llamativo */}
            <p>
              Bienvenido al sitio web de Luxe Pet, es un placer tenerte con nosotros.
              Ingresa a comenzar tu compra para tener la mejor experiencia para ti y tu mascota.
            </p> {/* Descripción/introducción al sitio */}
            <button as={Link} to="/Register" className="btn-custom">
              Comienza tu compra
            </button> {/* Botón que redirige al registro/compras */}
          </div>

          {/* Columna de imagen */}
          <div className="hero-image">
            <img src="/CatHomee.png" alt="Gato" /> {/* Imagen decorativa del héroe */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Inicio;
