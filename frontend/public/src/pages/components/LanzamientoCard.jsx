import React from 'react';

// Componente para mostrar lanzamientos
const LanzamientoCard = ({ imagen, titulo, precio }) => (
    <div className="card" style={{ width: '160px' }}> {/* Card con ancho fijo */}
        <img src={imagen} alt={titulo} className="card-image" /> {/* Imagen del producto */}
        <h4 className="text-sm">{titulo}</h4> {/* Título */}
        <p className="precio">{precio}</p> {/* Precio */}
    </div>
);

export default LanzamientoCard;