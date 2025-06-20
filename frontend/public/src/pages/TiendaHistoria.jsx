import React from 'react';
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

      {/* sección de testimonios de clientes satisfechos */}
      <section className="testimonios">

        {/* texto con reseña y calificación de un cliente */}
        <div className="testimonios-texto">
          <h5>Testimonios</h5>
          <h2>¿Qué opinan nuestros clientes acerca de nosotros?</h2>
          <p className="estrellas">★★★★★</p>
          <p className="comentario">
            Los productos de esta tienda son de muy buena calidad a mis mascotas les encanta! 
            Lo recomiendo muchísimo, es bastante sencilla de utilizar y tiene un diseño moderno y cálido para el usuario.
          </p>
          <h4>Fernanda Mizel</h4>
        </div>

        {/* imagen del cliente con botones para navegar entre testimonios */}
        <div className="testimonios-imagen">
          <img src="/img4.png" alt="Cliente feliz" />
          <div className="botones">
            <button className="boton-izquierda">‹</button>
            <button className="boton-derecha">›</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default TiendaHistoria;
