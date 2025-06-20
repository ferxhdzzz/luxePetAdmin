import React, { useState } from 'react';
import './Productoss.css';

const Tienda = () => {
  // estado para manejar el filtro de precio desde el input tipo range
  const [precio, setPrecio] = useState(50);

  // arreglo de productos que se mostrarán en la tienda
  const productos = [
    { nombre: 'Caja para gato', precio: '$29.99', link: '/producto/1', img: 'https://i.pinimg.com/736x/69/e9/75/69e97574256d4726a2aa63a6a8e99a1f.jpg' },
    { nombre: 'Plato para gato', precio: '$20.99', link: '/producto/2', img: 'https://i.pinimg.com/736x/05/bf/c7/05bfc723eb826286208bd4190e2cc27a.jpg' },
    { nombre: 'Comida de gato prm', precio: '$19.99', link: '/producto/3', img: 'https://i.pinimg.com/736x/2f/3f/07/2f3f07fd6c7651fc52bb7c2eb3ad0c2a.jpg' },
    { nombre: 'Premios para gatos', precio: '$20.99', link: '/producto/4', img: 'https://i.pinimg.com/736x/45/d9/86/45d986da499519112b4bec2a8610a9ae.jpg' },
    { nombre: 'Arenero para gatos', precio: '$4.99', link: '/producto/5', img: 'https://i.pinimg.com/736x/a7/6c/49/a76c49a2b1a33af8cc203da15748feda.jpg' },
    { nombre: 'Cama para gatos', precio: '$49.99', link: '/producto/6', img: 'https://i.pinimg.com/736x/41/a4/3a/41a43a3b45b999bb2a705b34472b7874.jpg' },
    { nombre: 'Correa para gato/perro', precio: '$9.99', link: '/producto/7', img: 'https://i.pinimg.com/736x/84/48/59/8448595e43a4b99c23d9783a4dc40d1e.jpg' },
    { nombre: 'Cama grande para gato', precio: '$49.99', link: '/producto/8', img: 'https://i.pinimg.com/736x/3d/22/97/3d22976354af20d83421e0e3dc1a71e0.jpg' },
    { nombre: 'Premios de pollo para gatos', precio: '$29.99', link: '/producto/9', img: 'https://i.pinimg.com/736x/85/1d/64/851d647967040675f0cebb75c34d83cf.jpg' },
  ];

  // arreglo con productos destacados o populares
  const populares = [
    { nombre: 'Comida premium para gato', precio: '$25', link: '/popular/1', img: 'https://i.pinimg.com/736x/bf/25/02/bf25023b02a26f459a50dc62e513c541.jpg' },
    { nombre: 'Cama para gato', precio: '$60', link: '/popular/2', img: 'https://i.pinimg.com/736x/26/72/d3/2672d38f9290464407f55c053c23b859.jpg' },
    { nombre: 'Correa para gato', precio: '$27', link: '/popular/3', img: 'https://i.pinimg.com/736x/b4/4e/1e/b44e1e087828a6a5030355b4a4f3110f.jpg' },
    { nombre: 'Plato de comida para gato', precio: '$20', link: '/popular/4', img: 'https://i.pinimg.com/736x/44/bf/41/44bf411bbba3e60b116c9e47f18a513c.jpg' },
  ];

  return (
    // contenedor general de la tienda, incluye sidebar y productos
    <div className="tienda-container">
      
      {/* barra lateral con filtros y productos populares */}
      <div className="sidebar">

        {/* filtro por categorías mediante checkboxes */}
        <h4>Filtrar por categorías</h4>
        <div className="checkbox-group">
          <label><input type="checkbox" /> Camas</label>
          <label><input type="checkbox" /> Platos</label>
          <label><input type="checkbox" /> Accesorios</label>
          <label><input type="checkbox" /> Comida</label>
          <label><input type="checkbox" /> Juguetes</label>
        </div>

        {/* filtro de precio usando un rango deslizante */}
        <h4>Filtrar por precio</h4>
        <div className="range-container">
          <input
            type="range"
            min="0"
            max="100"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <span>${precio}</span>
        </div>

        {/* filtro adicional por etiquetas */}
        <h4>Filtrar por etiquetas</h4>
        <div className="checkbox-group">
          <label><input type="checkbox" /> Comida natural</label>
          <label><input type="checkbox" /> Camas de algodón</label>
          <label><input type="checkbox" /> Comida premium</label>
          <label><input type="checkbox" /> Trajes suiticales</label>
        </div>

        {/* botones de etiquetas rápidas */}
        <h4>Filtrado por etiquetas</h4>
        <div className="tag-buttons">
          <button>Comida de perro</button>
          <button>Comida de gato</button>
          <button>Natural</button>
          <button>Aves</button>
          <button>Perro pequeño</button>
          <button>Reptiles</button>
        </div>

        {/* sección que muestra los productos más populares */}
        <h4>Productos populares</h4>
        {populares.map((p, idx) => (
          <div key={idx} className="popular-product">
            <img src={p.img} alt={`Imagen de ${p.nombre}`} />
            <div>
              <a href={p.link}>{p.nombre}</a>
              <p className="popular-price">{p.precio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* contenedor principal de productos */}
      <div className="main-content">
        <h2>Productos</h2>

        {/* envoltorio de la grilla de productos */}
        <div className="product-grid-wrapper">
          <div className="product-grid">
            {productos.map((p, idx) => (
              // tarjeta individual de cada producto
              <div key={idx} className="card">
                <img src={p.img} alt={`Imagen de ${p.nombre}`} />
                <h4>{p.nombre}</h4>
                <p>{p.precio}</p>
                <a href={p.link}><button>Comprar</button></a>
              </div>
            ))}
          </div>
        </div>

        {/* botones de paginación para cambiar de página */}
        <div className="pagination">
          <div className="button-group">
            <a href="/pagina/1"><button>1</button></a>
            <a href="/pagina/2"><button>2</button></a>
          </div>
          <a href="/pagina/siguiente"><button className="next-button">Siguiente</button></a>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
