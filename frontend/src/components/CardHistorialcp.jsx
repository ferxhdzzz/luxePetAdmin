import React from "react";
import "./CardHistorialcp.css";
import BotonAccion from "./Buttoncard"; // Asegúrate que el nombre del archivo es correcto

const CardHistorial = ({ registro, deleteUser }) => {
    return (
      <div className="card-historial">
        <br />
        <h2 className="card-titulo">Historial de registros</h2>
  <br />
        <div className="fila encabezado">
          <span>Nombre</span>
          <span>Usuario</span>
          <span>Email</span>
          <span>Compra</span>
          <span></span>
        </div>
  
        {registro.map((reg, idx) => (
          <div className="fila" key={idx}>
            <span>{reg.name}</span>
            <span>{reg.userName}</span>
            <span>{reg.email}</span>
             <span>
              {Array.isArray(reg.compra)
                ? item.compra.join(", ")
                : "Sin productos"}
            </span>
            <button
              className="boton-accion"
              onClick={() => deleteUser(reg._id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardHistorial;