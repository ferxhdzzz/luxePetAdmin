import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductPage.css';
import CartPage from './CartPagee.jsx';

const ProductPage = () => {
  const { productId, tipoMascota } = useParams();
  const [showCart, setShowCart] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [product, setProduct] = useState(null);
  
  // Simula una base de datos de productos
  const productosDB = {
    // Productos normales por ID
    "plato-para-perro": {
      nombre: "Plato para perro",
      precio: "$3.90",
      imagen: "https://i.pinimg.com/736x/57/5f/23/575f23782b6124e9bb8b72f1b10ae1d9.jpg",
      descripcion: "Plato de comida resistente y duradero para tu perro.",
      rating: 4.5
    },
    "comida-cachorro": {
      nombre: "Comida cachorro",
      precio: "$5.90",
      imagen: "https://i.pinimg.com/736x/44/41/4c/44414cfdfde3a3295829bc9bad3acec9.jpg",
      descripcion: "Comida especial para cachorros en crecimiento con todos los nutrientes necesarios.",
      rating: 4.8
    },
    "correa": {
      nombre: "Correa",
      precio: "$2.50",
      imagen: "https://i.pinimg.com/736x/4e/25/0c/4e250cf1217143a9d2403c0db6bc0e4f.jpg",
      descripcion: "Correa resistente y ajustable para pasear a tu mascota con seguridad.",
      rating: 4.2
    },
    "cama-redonda": {
      nombre: "Cama redonda",
      precio: "$9.90",
      imagen: "https://i.pinimg.com/736x/c2/c3/09/c2c309d06e0667f84f2bb5aa93882270.jpg",
      descripcion: "Cama circular suave y confortable para el descanso de tu mascota.",
      rating: 4.7
    },
    "galletas": {
      nombre: "Galletas",
      precio: "$4.90",
      imagen: "https://i.pinimg.com/736x/7b/31/bf/7b31bffc0bc524c5f437109b07a1dff7.jpg",
      descripcion: "Galletas deliciosas y nutritivas para premiar a tu mascota.",
      rating: 4.3
    },
    "shampoo": {
      nombre: "Shampoo",
      precio: "$6.50",
      imagen: "https://i.pinimg.com/736x/6b/54/2f/6b542f3e490e7f79dbc483841c92f0fe.jpg",
      descripcion: "Shampoo suave de alta calidad para el pelaje de tu mascota.",
      rating: 4.0
    },
  };
  
  // Categorías por tipo de mascota
  const tiposMascotaDB = {
    "perros": {
      nombre: "Productos para Perros",
      imagen: "https://i.pinimg.com/736x/c9/bf/5c/c9bf5c42f0e73f45f45fd4566f9745bf.jpg",
      descripcion: "Todos los productos de calidad para tu perro"
    },
    "gatos": {
      nombre: "Productos para Gatos",
      imagen: "https://i.pinimg.com/736x/55/6a/53/556a53659a2ca18460d0734db94edc74.jpg",
      descripcion: "Los mejores artículos para tu gato"
    },
    // Puedes agregar más tipos de mascotas aquí
  };

  useEffect(() => {
    // Si estamos en una ruta de producto específico
    if (productId) {
      setProduct(productosDB[productId] || {
        nombre: "Producto no encontrado",
        precio: "",
        imagen: "https://via.placeholder.com/400",
        descripcion: "Lo sentimos, este producto no existe o ha sido eliminado.",
        rating: 0
      });
    } 
    // Si estamos en una ruta de tipo de mascota
    else if (tipoMascota) {
      setProduct(tiposMascotaDB[tipoMascota] || {
        nombre: "Categoría no encontrada",
        imagen: "https://via.placeholder.com/400",
        descripcion: "Lo sentimos, esta categoría no existe o ha sido eliminada."
      });
    }
    // Si no hay ningún parámetro, mostrar el producto por defecto
    else {
      setProduct({
        nombre: "Camiseta de perro con estampado",
        precio: "$9.00",
        imagen: "https://5.imimg.com/data5/ECOM/Default/2024/1/376691210/HC/DP/YV/82542766/huftiputthewagintheswagdogt-shirt-30960d5f-1f24-4548-92e3-2725945be348-500x500.jpg",
        descripcion: "Linda y cómoda camiseta diseñada especialmente para tu mejor amigo peludo. Confeccionada en un suave material de algodón, esta prenda es ideal para mantener a tu mascota fresca y a gusto durante los días calurosos.",
        rating: 4.2
      });
    }
  }, [productId, tipoMascota]);

  const handleAddToCart = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  const handleCheckout = () => {
    setShowCart(false);
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <div className="thank-you-container">
        <div className="thank-you-card">
          <h1>¡Gracias por tu compra!</h1>
          <p>Tu pedido ha sido procesado correctamente.</p>
          <button
            onClick={() => setShowThankYou(false)}
            className="back-to-store-btn"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  if (showCart) {
    return <CartPage onContinueShopping={handleContinueShopping} onCheckout={handleCheckout} />;
  }

  // Espera hasta que product se cargue
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pet-store-container">
      <div className="pet-store-wrapper">
        <div className="pet-store-layout">

          {/* Barra lateral */}
          <div className="sidebar">
            <div className="filter-section">
              <h3 className="section-title">Filtrar por categorías</h3>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="camas" />
                  <label htmlFor="camas">Camas</label>
                </div>
                <span className="filter-count">21</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="ropa" />
                  <label htmlFor="ropa">Ropa</label>
                </div>
                <span className="filter-count">35</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="accesorios" />
                  <label htmlFor="accesorios">Accesorios</label>
                </div>
                <span className="filter-count">14</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="comida" />
                  <label htmlFor="comida">Comida</label>
                </div>
                <span className="filter-count">50</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="juguetes" />
                  <label htmlFor="juguetes">Juguetes</label>
                </div>
                <span className="filter-count">60</span>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Filtrar por Precio</h3>
              <input type="range" min="0" max="100" className="price-slider" />
              <div className="price-filter-footer">
                <span className="price-range">Precio: $0 - $100</span>
                <button className="filter-button">Filtrar</button>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Filtrar por etiquetas</h3>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="natural" />
                  <label htmlFor="natural">Comida natural</label>
                </div>
                <span className="filter-count">23</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="digestion" />
                  <label htmlFor="digestion">Comida de digestión</label>
                </div>
                <span className="filter-count">18</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="premium" />
                  <label htmlFor="premium">Comida premium</label>
                </div>
                <span className="filter-count">32</span>
              </div>
              <div className="filter-item">
                <div className="filter-checkbox">
                  <input type="checkbox" id="especiales" />
                  <label htmlFor="especiales">Triples calorías</label>
                </div>
                <span className="filter-count">25</span>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Filtrado por etiquetas</h3>
              <div className="tags-container">
                <button className="tag-button">Comida de perro</button>
                <button className="tag-button">Comida de gato</button>
                <button className="tag-button">Natural</button>
                <button className="tag-button">Perros</button>
                <button className="tag-button">Perro pequeño</button>
                <button className="tag-button">Reptiles</button>
              </div>
            </div>

            <div className="filter-section">
              <h3 className="section-title">Productos populares</h3>
              <div className="popular-products">
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Comida premium para gato</p>
                    <p className="product-price">$25</p>
                  </div>
                </div>
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Cama para gato</p>
                    <p className="product-price">$36</p>
                  </div>
                </div>
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Correa para gato</p>
                    <p className="product-price">$17</p>
                  </div>
                </div>
                <div className="popular-product">
                  <div className="product-thumbnail"></div>
                  <div className="product-info">
                    <p className="product-name">Plato de comida para gato</p>
                    <p className="product-price">$20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          {/* Detalles de Producto */}
          <div className="product-detail">
            <div className="product-layout vertical">
              <div className="product-image-container full-width">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="product-image"
                />
              </div>

              <div className="product-info-container full-width">
                <div className="product-header">
                  <h2 className="product-title">{product.nombre}</h2>
                  {product.precio && (
                    <div className="product-price-tag">
                      <span>{product.precio}</span>
                    </div>
                  )}
                </div>

                {product.rating !== undefined && (
                  <div className="product-rating">
                    <span className="rating-label">Calificación:</span>
                    <div className="stars">
                      {'★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating))} <span>{product.rating}/5</span>
                    </div>
                  </div>
                )}

                {product.precio && (
                  <div className="product-size">
                    <p className="size-label">Talla:</p>
                    <div className="size-options">
                      <button className="size-button">S</button>
                      <button className="size-button selected">M</button>
                      <button className="size-button">L</button>
                      <button className="size-button">XL</button>
                    </div>
                  </div>
                )}

                <div className="product-description">
                  <h3 className="description-title">Descripción:</h3>
                  <p className="description-text">
                    {product.descripcion}
                  </p>
                </div>

                <br /> <br /> <br />
                {product.precio && (
                  <div className="add-to-cart-container">
                    <button
                      onClick={handleAddToCart}
                      className="add-to-cart-button"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                )}
                
                <Link to="/products" className="back-button">← Volver a productos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;