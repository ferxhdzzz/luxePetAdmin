import React from 'react';
import { FaDog, FaTshirt, FaGlassMartini } from 'react-icons/fa';

const TopSellingProducts = () => {
    // Datos de ejemplo para productos más vendidos
    const products = [
        { id: 1, name: 'Comida para perro', sales: '1000 ventas', icon: <FaDog /> },
        { id: 2, name: 'Camas', sales: '580 ventas', icon: <FaTshirt /> },
        { id: 3, name: 'Juguetes para gatos', sales: '320 ventas', icon: <FaGlassMartini /> },
    ];

    return (
        <div className="top-selling-container">
            <h3 className="top-selling-title">Productos más vendidos</h3>
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <div className="product-icon">
                        {product.icon}
                    </div>
                    <div className="product-details">
                        <div className="product-name">{product.name}</div>
                        <div className="product-sales">{product.sales}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopSellingProducts;