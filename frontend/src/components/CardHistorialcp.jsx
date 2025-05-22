import React from "react";
import "./CardHistorialcp.css";
import BotonAccion from "./ButtonCard"; // Asegúrate que el nombre del archivo es correcto

const CardHistorial = ({ titulo, historial, onEliminar }) => {
    return (
      <div className="card-historial">
        <br />
        <h2 className="card-titulo">{titulo}</h2>
  <br />
        <div className="fila encabezado">
          <span>Nombre</span>
          <span>Teléfono</span>
          <span>Email</span>
          <span>Compra</span>
          <span></span>
        </div>
  
        {historial.map((item, idx) => (
          <div className="fila" key={idx}>
            <span>{item.nombre}</span>
            <span>{item.telefono}</span>
            <span>{item.email}</span>
            <span>
              {Array.isArray(item.compra)
                ? item.compra.join(", ")
                : "Sin productos"}
            </span>
            <button
              className="boton-accion"
              onClick={() => onEliminar(item.nombre)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardHistorial;