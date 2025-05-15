import React from 'react';
import { ChevronRight } from 'lucide-react';

// Componente para cada icono de categoría
const CategoryIcon = ({ category }) => {
  switch (category) {
    case 'Premios':
      return (
        <div className="flex items-center justify-center bg-blue-50 p-3 rounded-lg w-12 h-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3H8V21H6V3ZM16 3H18V21H16V3ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H6V3H4ZM18 3V21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H18Z" fill="#2563EB" />
          </svg>
        </div>
      );
    case 'Ropa':
      return (
        <div className="flex items-center justify-center bg-blue-50 p-3 rounded-lg w-12 h-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 6H17V8H7V6ZM5 14H19V16H5V14ZM3 10H21V12H3V10Z" fill="#2563EB" />
          </svg>
        </div>
      );
    case 'Juguetes':
      return (
        <div className="flex items-center justify-center bg-blue-50 p-3 rounded-lg w-12 h-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H8L10 19V21H14V19L16 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z" stroke="#2563EB" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );
    case 'Accesorios':
      return (
        <div className="flex items-center justify-center bg-blue-50 p-3 rounded-lg w-12 h-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="#2563EB" strokeWidth="2" fill="none" />
            <circle cx="9" cy="10" r="2" stroke="#2563EB" strokeWidth="2" fill="none" />
            <path d="M15 8H17M15 12H17" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

// Componente principal para la tarjeta de categoría
const ProductCategoryCard = ({ category, productCount }) => {
  // Determina el color del número basado en la categoría
  const getCountColor = () => {
    switch (category) {
      case 'Premios': return 'text-blue-600';
      case 'Ropa': return 'text-blue-600';
      case 'Juguetes': return 'text-blue-600';
      case 'Accesorios': return 'text-blue-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 mb-4 shadow-sm">
      <div className="flex items-center">
        <CategoryIcon category={category} />
        <div className="ml-4 text-xl font-medium">{category}</div>
      </div>
      <div className="flex items-center">
        <div className="text-gray-600 mr-2">productos : </div>
        <div className={`mr-4 ${getCountColor()}`}>{productCount}</div>
        <ChevronRight className="text-gray-400" size={20} />
      </div>
    </div>
  );
};

// Componente contenedor que muestra todas las categorías
const ProductCategories = () => {
  const categories = [
    { name: 'Premios', count: 50 },
    { name: 'Ropa', count: 70 },
    { name: 'Juguetes', count: 90 },
    { name: 'Accesorios', count: 25 }
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Categorias de productos</h2>
      <div>
        {categories.map((cat) => (
          <ProductCategoryCard
            key={cat.name}
            category={cat.name}
            productCount={cat.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;