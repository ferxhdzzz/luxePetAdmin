import React from "react";
import "./CardProveedor.css";
import BotonAccion from "./Buttoncard"; // Asegúrate que el nombre del archivo es correcto

const CardProveedor = ({ titulo, proveedores, onEliminar }) => {
    return (
      <div className="card-proveedorr">
        <br />
        <h2 className="card-titulo">{titulo}</h2>
  <br />
        <div className="fila encabezad">
          <span>Nombre</span>
          <span>Número de teléfono</span>
          <span>Email</span>
          <span></span>
        </div>
  
        {proveedores.map((prov, idx) => (
          <div className="filar" key={idx}>
            <span>{prov.nombre}</span>
            <span>{prov.telefono}</span>
            <span>{prov.email}</span>
            <BotonAccion label="Eliminar" onClick={() => onEliminar(prov.nombre)} />
          </div>
        ))}
      </div>
    );
  };
  
  export default CardProveedor;
  