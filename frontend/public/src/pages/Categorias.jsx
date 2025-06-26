import React, { useState } from 'react'; // Importamos React y el hook useState para manejar estados locales
import { Link } from 'react-router-dom'; // Importamos Link para la navegación interna sin recargar la página
import ProductoCard from './components/ProductoCard.jsx'; // Importamos el componente ProductoCard
import LanzamientoCard from './components/LanzamientoCard.jsx'; // Importamos el componente LanzamientoCard
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
  // Estado para controlar el carrusel de productos
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array con todos los productos
  const productos = [
    { imagen: "https://i.pinimg.com/736x/57/5f/23/575f23782b6124e9bb8b72f1b10ae1d9.jpg", titulo: "Plato para perro", precio: "$3.90", link: "/product/plato-para-perro" },
    { imagen: "https://i.pinimg.com/736x/44/41/4c/44414cfdfde3a3295829bc9bad3acec9.jpg", titulo: "Comida cachorro", precio: "$5.90", link: "/product/comida-cachorro" },
    { imagen: "https://i.pinimg.com/736x/4e/25/0c/4e250cf1217143a9d2403c0db6bc0e4f.jpg", titulo: "Correa", precio: "$2.50", link: "/product/correa" },
    { imagen: "https://i.pinimg.com/736x/c2/c3/09/c2c309d06e0667f84f2bb5aa93882270.jpg", titulo: "Cama redonda", precio: "$9.90", link: "/product/cama-redonda" },
    { imagen: "https://i.pinimg.com/736x/7b/31/bf/7b31bffc0bc524c5f437109b07a1dff7.jpg", titulo: "Galletas", precio: "$4.90", link: "/product/galletas" },
    { imagen: "https://i.pinimg.com/736x/6b/54/2f/6b542f3e490e7f79dbc483841c92f0fe.jpg", titulo: "Shampoo", precio: "$6.50", link: "/product/shampoo" },
    { imagen: "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6789012345678901234ab.jpg", titulo: "Collar elegante", precio: "$7.90", link: "/product/collar-elegante" },
    { imagen: "https://i.pinimg.com/736x/d4/e5/f6/d4e5f6789012345678901234567890cd.jpg", titulo: "Juguete interactivo", precio: "$12.50", link: "/product/juguete-interactivo" },
    { imagen: "https://i.pinimg.com/736x/e7/f8/a9/e7f8a9012345678901234567890123ef.jpg", titulo: "Transportadora", precio: "$25.90", link: "/product/transportadora" }
  ];

  const productsPerSlide = 3;
  const totalSlides = Math.ceil(productos.length / productsPerSlide);

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Función para obtener productos del slide actual
  const getCurrentProducts = () => {
    const startIndex = currentSlide * productsPerSlide;
    const endIndex = startIndex + productsPerSlide;
    return productos.slice(startIndex, endIndex);
  };

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

      {/* Sección de productos más comprados con carrusel */}
      <h2 className="section-title">Productos más comprados</h2>
      <div className="carousel-container">
        {/* Botón anterior */}
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          ◀
        </button>

        {/* Contenedor de productos */}
        <div className="carousel-content">
          <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="carousel-slide">
                {productos
                  .slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide)
                  .map((producto, index) => (
                    <ProductoCard
                      key={`${slideIndex}-${index}`}
                      imagen={producto.imagen}
                      titulo={producto.titulo}
                      precio={producto.precio}
                      link={producto.link}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Botón siguiente */}
        <button
          className="carousel-btn carousel-btn-next"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          ▶
        </button>
      </div>

      {/* Indicadores de slide */}
      <div className="carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
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

export default Productos;