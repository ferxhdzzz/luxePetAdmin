import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductoCard.css'; // Estilos específicos para el componente

const ProductoCard = ({ imagen, titulo, precio, link }) => {
    const [hovered, setHovered] = useState(false); // Estado para hover del card
    const [buttonHover, setButtonHover] = useState(false); // Estado para hover del botón

    return (
        <div
            className={`producto-card ${hovered ? 'producto-card-hover' : ''}`} // Card con estilo hover
            onMouseEnter={() => setHovered(true)} // Activar hover
            onMouseLeave={() => setHovered(false)} // Desactivar hover
        >
            <img src={imagen} alt={titulo} className="producto-card-image" /> {/* Imagen del producto */}
            <h4 className="producto-card-title">{titulo}</h4> {/* Título del producto */}
            <p className="producto-card-precio">{precio}</p> {/* Precio del producto */}
            {/* Botón con Link de React Router para navegar */}
            <Link to={link} className="producto-card-link">
                <button
                    className={`producto-card-button ${buttonHover ? 'producto-card-button-hover' : ''}`} // Clase de botón con hover
                    onMouseEnter={() => setButtonHover(true)} // Hover del botón
                    onMouseLeave={() => setButtonHover(false)} // Fin del hover
                >
                    Comprar
                </button>
            </Link>
        </div>
    );
};

export default ProductoCard;