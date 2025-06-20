import React from 'react';
import { FaTshirt, FaGift, FaGamepad, FaPuzzlePiece, FaBox, FaTag } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';
import useProducts from '../hooks/categorias/useProducts'; // Ajusta la ruta según tu estructura de carpetas

const ProductCategoryCard = () => {
  const { products, loading, error } = useProducts();

  // Función para obtener el icono según la categoría del producto
  const getCategoryIcon = (categoryName) => {
    if (!categoryName) return <FaBox />;

    const category = categoryName.toLowerCase();

    if (category.includes('premio') || category.includes('award')) return <FaGift />;
    if (category.includes('ropa') || category.includes('clothing')) return <FaTshirt />;
    if (category.includes('juguete') || category.includes('toy')) return <FaGamepad />;
    if (category.includes('accesorio') || category.includes('accessory')) return <FaPuzzlePiece />;

    return <FaBox />; // Icono por defecto
  };

  // Función para formatear el precio
  const formatPrice = (price) => {
    if (!price) return 'Precio no disponible';
    return `$${parseFloat(price).toFixed(2)}`;
  };

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return 'Fecha no disponible';

    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) return `Hace ${Math.ceil(diffDays / 7)} semanas`;
    return `Hace ${Math.ceil(diffDays / 30)} meses`;
  };

  // Función para truncar texto largo
  const truncateText = (text, maxLength = 30) => {
    if (!text) return 'Sin descripción';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  if (loading) {
    return (
      <div className="category-cards-container">
        <h3 className="categories-title">Últimos productos agregados</h3>
        <div className="loading-message">
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-cards-container">
        <h3 className="categories-title">Últimos productos agregados</h3>
        <div className="error-message">
          <p>Error al cargar los productos: {error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="category-cards-container">
        <h3 className="categories-title">Últimos productos agregados</h3>
        <div className="no-products-message">
          <p>No hay productos disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="category-cards-container">
      <h3 className="categories-title">Últimos productos agregados</h3>
      <div className="category-cards">
        {products.map(product => (
          <div key={product._id || product.id} className="category-card product-card">
            <div className="category-info product-info">
              <div className="category-icon product-icon">
                {getCategoryIcon(product.idCategory?.name || product.categoryName)}
              </div>
              <div className="category-details product-details">
                <div className="category-name product-name">
                  {truncateText(product.nameProduct || 'Producto sin nombre')}
                </div>
                <div className="category-count product-info-row">
                  <span className="product-price">
                    <FaTag style={{ fontSize: '12px', marginRight: '4px' }} />
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="product-meta">
                  <small className="product-stock">
                    Stock: {product.amount || 0}
                  </small>
                  <br />
                  <small className="product-date">
                    {formatDate(product.createdAt || product.date)}
                  </small>
                </div>
              </div>
            </div>
            <div className="category-arrow">
              <MdChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryCard;