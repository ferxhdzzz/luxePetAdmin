import React, { useState } from 'react'; // Importamos React y el hook useState para manejar estados locales
import { Link } from 'react-router-dom'; // Importamos Link para la navegación interna sin recargar la página
import './Categoria.css'; // Importamos los estilos CSS específicos para este componente

// Componente para mostrar cada categoría
const CategoriaCard = ({ imagen, titulo, productos }) => {
  const [hovered, setHovered] = useState(false); // Estado local para manejar el efecto hover

  return (
    <div
      className={`card ${hovered ? 'card-hover' : ''}`} // Se aplica clase adicional cuando está en hover
      style={{ width: '150px' }} // Ancho fijo del card
      onMouseEnter={() => setHovered(true)} // Cuando el mouse entra, activa hover
      onMouseLeave={() => setHovered(false)} // Cuando el mouse sale, desactiva hover
    >
      <img src={imagen} alt={titulo} className="card-image" /> {/* Imagen de la categoría */}
      <h3 className="text-sm">{titulo}</h3> {/* Título de la categoría */}
      <p className="text-sm">{productos} productos</p> {/* Número de productos */}
    </div>
  );
};

// Componente para mostrar lanzamientos
const LanzamientoCard = ({ imagen, titulo, precio }) => (
  <div className="card" style={{ width: '160px' }}> {/* Card con ancho fijo */}
    <img src={imagen} alt={titulo} className="card-image" /> {/* Imagen del producto */}
    <h4 className="text-sm">{titulo}</h4> {/* Título */}
    <p className="precio">{precio}</p> {/* Precio */}
  </div>
);

// Componente para productos más comprados
const ProductoCard = ({ imagen, titulo, precio, link }) => {
  const [hovered, setHovered] = useState(false); // Estado para hover del card
  const [buttonHover, setButtonHover] = useState(false); // Estado para hover del botón

  return (
    <div
      className={`card ${hovered ? 'card-hover' : ''}`} // Card con estilo hover
      style={{ width: '140px' }} // Ancho del card
      onMouseEnter={() => setHovered(true)} // Activar hover
      onMouseLeave={() => setHovered(false)} // Desactivar hover
    >
      <img src={imagen} alt={titulo} className="card-image" /> {/* Imagen del producto */}
      <h4 className="text-sm">{titulo}</h4> {/* Título del producto */}
      <p className="precio">{precio}</p> {/* Precio del producto */}
      {/* Botón con Link de React Router para navegar */}
      <Link to={link} className="no-decoration">
        <button
          className={`button ${buttonHover ? 'button-hover' : ''}`} // Clase de botón con hover
          onMouseEnter={() => setButtonHover(true)} // Hover del botón
          onMouseLeave={() => setButtonHover(false)} // Fin del hover
        >
          Comprar
        </button>
      </Link>
    </div>
  );
};

// Componente para íconos de mascotas
const MascotaIcon = ({ imagen, nombre, link }) => {
  const [hovered, setHovered] = useState(false); // Estado para hover

  return (
    <Link
      to={link} // Navegación interna
      className={`mascota-icon ${hovered ? 'mascota-icon-hover' : ''}`} // Estilo con hover
      onMouseEnter={() => setHovered(true)} // Activar hover
      onMouseLeave={() => setHovered(false)} // Desactivar hover
    >
      <img src={imagen} alt={nombre} className="mascota-image" /> {/* Imagen de la mascota */}
      <p>{nombre}</p> {/* Nombre de la mascota */}
    </Link>
  );
};

// Componente principal que renderiza toda la sección de productos
const Productos = ({ defaultc }) => {
  return (
    <div className="container"> {/* Contenedor principal */}
      <br />
      <br />
      {/* Sección de categorías */}
      <h2 className="section-title">Productos por categorías</h2>
      <div className="scroll-x"> {/* Contenedor horizontal scrollable */}
        <CategoriaCard imagen="https://i.pinimg.com/736x/f7/1f/05/f71f050d316461b58b1cc5f78a1b93c2.jpg" titulo="Accesorios" productos="15" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/fd/ec/ec/fdececbc621850dab5565aa8de0ff4d3.jpg" titulo="Comida" productos="10" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/4f/02/49/4f0249c6c317850b62a5e43912a54aef.jpg" titulo="Juguetes" productos="8" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/40/1f/b9/401fb9c30711428e373b9260512a26ec.jpg" titulo="Camas" productos="6" />
      </div>

      {/* Sección de lanzamientos */}
      <h2 className="section-title">Próximos lanzamientos</h2>
      <div className="flex"> {/* Contenedor en flexbox */}
        <LanzamientoCard imagen="https://i.pinimg.com/736x/bf/25/02/bf25023b02a26f459a50dc62e513c541.jpg" titulo="Comida premium para perros" precio="$9.90" />
        <LanzamientoCard imagen="https://i.pinimg.com/736x/22/41/e1/2241e1359eda6249d9cc3f223fc6aacb.jpg" titulo="Comida premium para gatos" precio="$8.90" />
        <LanzamientoCard imagen="https://i.pinimg.com/736x/fe/14/db/fe14db8d29236e61b2fbf806dbb41768.jpg" titulo="Snacks naturales" precio="$5.50" />
      </div>

      {/* Mensaje de información */}
      <div className="info-alert">
        Seguridad y calidad para tus mascotas siempre!
      </div>

      {/* Sección de productos más comprados */}
      <h2 className="section-title">Productos más comprados</h2>
      <div className="wrap"> {/* Contenedor con wrap para responsive */}
        <ProductoCard imagen="https://i.pinimg.com/736x/57/5f/23/575f23782b6124e9bb8b72f1b10ae1d9.jpg" titulo="Plato para perro" precio="$3.90" link="/product/plato-para-perro" />
        <ProductoCard imagen="https://i.pinimg.com/736x/44/41/4c/44414cfdfde3a3295829bc9bad3acec9.jpg" titulo="Comida cachorro" precio="$5.90" link="/product/comida-cachorro" />
        <ProductoCard imagen="https://i.pinimg.com/736x/4e/25/0c/4e250cf1217143a9d2403c0db6bc0e4f.jpg" titulo="Correa" precio="$2.50" link="/product/correa" />
        <ProductoCard imagen="https://i.pinimg.com/736x/c2/c3/09/c2c309d06e0667f84f2bb5aa93882270.jpg" titulo="Cama redonda" precio="$9.90" link="/product/cama-redonda" />
        <ProductoCard imagen="https://i.pinimg.com/736x/7b/31/bf/7b31bffc0bc524c5f437109b07a1dff7.jpg" titulo="Galletas" precio="$4.90" link="/product/galletas" />
        <ProductoCard imagen="https://i.pinimg.com/736x/6b/54/2f/6b542f3e490e7f79dbc483841c92f0fe.jpg" titulo="Shampoo" precio="$6.50" link="/product/shampoo" />
      </div>

      {/* Sección para tipos de mascotas */}
      <h2 className="section-title">Compra según tu tipo de mascota</h2>
      <div className="space-evenly"> {/* Contenedor con distribución equitativa */}
        <MascotaIcon imagen="https://i.pinimg.com/736x/c9/bf/5c/c9bf5c42f0e73f45f45fd4566f9745bf.jpg" nombre="Perros" link="/mascota/perros" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/55/6a/53/556a53659a2ca18460d0734db94edc74.jpg" nombre="Gatos" link="/mascota/gatos" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/92/db/ea/92dbea005bf7a47ef126b3e6467fbde8.jpg" nombre="Roedores" link="/mascota/roedores" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/59/1f/92/591f92e199e64e4a7fe3c93f55351c5c.jpg" nombre="Aves" link="/mascota/aves" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/77/63/8a/77638aa83fce0b9c25fcb3d422b70628.jpg" nombre="Conejos" link="/mascota/conejos" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/80/f8/e9/80f8e948a8dd7f5d7f1fc47fd7296869.jpg" nombre="Reptiles" link="/mascota/reptiles" />
      </div>
    </div>
  );
};

export default Productos; // Exportamos el componente principal para ser usado en otras partes de la app
