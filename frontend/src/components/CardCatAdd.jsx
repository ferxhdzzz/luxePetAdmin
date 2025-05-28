// CardCatAdd.jsx
import React from "react";
import "./CardCatAdd.css";

const categorias = [
  { nombre: "Gatos", imagen: "/GatosFondoAzul.png" },
  { nombre: "Roedores", imagen: "/RoedoresFondoAzul.png" },
  { nombre: "Perros", imagen: "/PerroFondoAzul.png" },
  { nombre: "Aves", imagen: "/AvesFondoAzul.png" },
  { nombre: "Reptiles", imagen: "/ReptilesFondoAzul.png" },
];

const CardCatAdd = ({ seleccionada, onSeleccionar }) => {
  return (
    <div className="card-cat-add">
      {categorias.map((cat) => (
        <div
          key={cat.nombre}
          className={`card-cat-item ${seleccionada === cat.nombre ? "activa" : ""}`}
          onClick={() => onSeleccionar(cat.nombre)}
        >
          <div className="card-cat-imagen-wrapper">
            <img src={cat.imagen} alt={cat.nombre} className="card-cat-img" />
          </div>
          <span>{cat.nombre}</span>
        </div>
      ))}
    </div>
  );
};

export default CardCatAdd;
