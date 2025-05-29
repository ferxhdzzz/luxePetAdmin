import React from "react";
import "./CardEmpleado.css";
import BotonAccion from "./Buttoncard";

const CardEmpleado = ({ titulo, empleados, onEditar, onEliminar }) => {
  return (
    <div className="card-empleado">
      <br />
      <h2 className="card-titulo">{titulo}</h2>
      <br />
      <div className="fila encabezado">
        <span>Nombre</span>
        <span>Apellido</span>
        <span>Cargo</span>
        <span>Teléfono</span>
        <span>Email</span>
        <span className="acciones-header">Acciones</span>
      </div>

      {empleados.map((emp, idx) => (
        <div className="fila" key={idx}>
          <span>{emp.nombre}</span>
          <span>{emp.apellido}</span>
          <span>{emp.cargo}</span>
          <span>{emp.telefono}</span>
          <span>{emp.email}</span>
          <div className="acciones-container">
            <div className="botones-accion">
              <BotonAccion label="Editar" onClick={() => onEditar(emp)} />
            </div>
            <div className="botones-accion">
              <BotonAccion label="Eliminar" onClick={() => onEliminar(emp)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardEmpleado;
