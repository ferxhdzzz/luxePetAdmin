import React from 'react';
import Boton from './BtnProductos';
import './CardProductos.css';

const CardProducto = ({ producto, onEditar, onEliminar }) => {
  return (
    <div className="card-producto">
      <img src={producto.imagen} alt={producto.name} className="product-image" />
      <h4>{producto.name}</h4>

      <div className="buttons">
        <Boton texto="Editar" onClick={() => onEditar(producto)} />
        <Boton texto="Eliminar" onClick={() => onEliminar(producto)} />
      </div>

      <div className="final-price">${producto.price.toFixed(2)}</div>
    </div>
  );
};

export default CardProducto;