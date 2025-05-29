import React from "react";
import BotonAccion from "./BtnProductos";
import "./CategoriaCard.css";

const CategoriaCard = ({ categories, deleteCategories, updateCategorie }) => {
  const {
    _id,
    categoryName,
   description
  
  } = categories;




  return (
    <div className="categoria-card">
      <h5>{categoryName}</h5>
          <h5> {description}</h5>
      <br />
      <div className="buttons">
        <BotonAccion texto="Editar" onClick={() => updateCategorie(categories)} />
        <BotonAccion texto="Eliminar" onClick={() => deleteCategories(_id)} />
      </div>
    </div>
  );
};

export default CategoriaCard;