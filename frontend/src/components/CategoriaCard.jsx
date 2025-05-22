import React from "react";
import BotonAccion from "./BtnProductos";
import "./CategoriaCard.css";

const CategoriaCard = ({ nombre, imagen, onEditar, onEliminar }) => {
  return (
    <div className="categoria-card">
      <img src={imagen} alt={nombre} className="categoria-img" />
      <h4>{nombre}</h4>
      
      <div className="buttons">
        <BotonAccion texto="Editar" onClick={() => onEditar(producto)} />
        <BotonAccion texto="Eliminar" onClick={() => onEliminar(producto)} />
      </div>
    </div>
  );
};

export default CategoriaCard;