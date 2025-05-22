import React from "react";
import "./ButtonCard.css";

const BotonAccion = ({ label, onClick }) => {
  return (
    <button className="boton-accion" onClick={onClick}>
      {label}
    </button>
  );
};

export default BotonAccion;