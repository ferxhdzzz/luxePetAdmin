import React from 'react';
import { FaTshirt, FaGift, FaGamepad, FaPuzzlePiece } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';

const ProductCategoryCard = () => {
  // Datos de ejemplo para las categorías
  const categories = [
    { id: 1, name: 'Premios', count: 50, icon: <FaGift /> },
    { id: 2, name: 'Ropa', count: 78, icon: <FaTshirt /> },
    { id: 3, name: 'Juguetes', count: 90, icon: <FaGamepad /> },
    { id: 4, name: 'Accesorios', count: 25, icon: <FaPuzzlePiece /> }
  ];

  return (
    <div className="category-cards-container">
      <h3 className="categories-title">Categorías de productos</h3>
      <div className="category-cards">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <div className="category-info">
              <div className="category-icon">
                {category.icon}
              </div>
              <div className="category-details">
                <div className="category-name">{category.name}</div>
                <div className="category-count">productos : {category.count}</div>
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