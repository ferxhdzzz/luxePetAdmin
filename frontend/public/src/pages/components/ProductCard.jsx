import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ producto }) => {
    return (
        <div className="card">
            <img src={producto.img} alt={`Imagen de ${producto.nombre}`} />
            <h4>{producto.nombre}</h4>
            <p>{producto.precio}</p>
            <a href={producto.link}>
                <button>Comprar</button>
            </a>
        </div>
    );
};

export default ProductCard;