import React from 'react';
import Testimonios from '../components/Testimonios.jsx'; // Ajusta la ruta según tu estructura
import './TiendaHistoria.css';

function TiendaHistoria() {
  return (
    <div className="App">

      {/* sección que presenta la historia de la tienda */}
      <section className="historia">
        <h2>Historia de nuestra tienda</h2>

        {/* párrafos descriptivos sobre los orígenes y misión de la tienda */}
        <div className="historia-textos">
          <p>Al enfocarnos en entregar piezas únicas, nos aseguramos que cada cliente experimente algo especial, junto con su amigo peludo</p>
          <p>Desde el inicio, nuestra pasión por ofrecer productos exclusivos nos ha impulsado a crecer...</p>
        </div>

        {/* datos destacados de la tienda: clientes, tiendas, productos, años */}
        <div className="historia-datos">
          <div><h3>2k+</h3><p>Happy Clients</p></div>
          <div><h3>72</h3><p>Stores</p></div>
          <div><h3>1.8k+</h3><p>Products</p></div>
          <div><h3>28</h3><p>Years In Business</p></div>
        </div>
      </section>

      {/* sección que muestra al equipo humano detrás de la tienda */}
      <section className="equipo">
        <h2>Nuestro equipo</h2>

        {/* tarjetas individuales para cada miembro del equipo */}
        <div className="equipo-cards">
          <div className="card">
            <img src="/img2.png" alt="Jennifer" />
            <h4>Jennifer Tejada Teas</h4>
            <p>Seller</p>
          </div>
          <div className="card">
            <img src="/img1.png" alt="Josue" />
            <h4>Josue Hernandez</h4>
            <p>Seller</p>
          </div>
          <div className="card">
            <img src="/img3.png" alt="Averi" />
            <h4>Fernanda Mizel</h4>
            <p>Seller</p>
          </div>
        </div>
      </section>

      {/* Componente de testimonios */}
      <Testimonios />

    </div>
  );
}

export default TiendaHistoria;