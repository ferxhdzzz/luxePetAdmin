import React from 'react';

const TopSellingProducts = () => {
  // Datos de los productos más vendidos
  const products = [
    {
      id: 1,
      name: 'Comida para perro',
      sales: 1000,
      icon: (
        <div className="bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="8" height="14" rx="1" fill="#9CA3AF" />
            <rect x="13" y="6" width="8" height="14" rx="1" fill="#9CA3AF" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      name: 'Camas',
      sales: 580,
      icon: (
        <div className="bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="8" ry="5" fill="#9CA3AF" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      name: 'Juguetes para gatos',
      sales: 300,
      icon: (
        <div className="bg-gray-200 w-12 h-12 rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="5" width="4" height="14" rx="1" fill="#9CA3AF" />
            <rect x="14" y="5" width="4" height="14" rx="1" fill="#9CA3AF" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-md">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Productos mas vendidos</h2>
      
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center">
              {product.icon}
              <span className="ml-4 text-gray-800">{product.name}</span>
            </div>
            <span className="text-gray-500">{product.sales} ventas</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;