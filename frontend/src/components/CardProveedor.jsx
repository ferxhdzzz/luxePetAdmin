import React from "react";
import "./CardProveedor.css";
import BotonAccion from "./Buttoncard";

const CardProveedor = ({ proveedores, deleteSupplier }) => {
  return (
    <div className="card-proveedorr">
      <br />
      <h2 className="card-titulo">Proveedores</h2>
      <br />
      <div className="fila encabezad">
        <span>Nombre</span>
        <span>Número de teléfono</span>
        <span>Email</span>
        <span></span>
      </div>

      {proveedores.map((prov, idx) => (
        <div className="filar" key={idx}>
          <span>{prov.name}</span>
          <span>{prov.phone}</span>
          <span>{prov.address}</span>
          <BotonAccion label="Eliminar" onClick={() => deleteSupplier(prov._id)} />
        </div>
      ))}
    </div>
  );
};

export default CardProveedor;