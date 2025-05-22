import React from "react";
import "./AgregarcatCard.css";

const FormAgregarCategoria = ({ onSubmit, onImageChange }) => {
  return (
    <div className="form-categoria">
      <h3>Agregar categoría</h3>

      <div className="form-img-preview">
        <img src="/roedores.png" alt="preview" />
      </div>

{/* Botón personalizado para subir imagen */}
<button htmlFor="file-upload" className="label-imagen">
  Subir imagen
</button>
<input
  id="file-upload"
  type="file"
  accept="image/*"
  onChange={onImageChange}
  className="file-input"
/>
<br />
      <label >Nombre</label>
      <input type="text" placeholder="" />
<br /><br />
      <label >Descripción</label>
      <textarea placeholder=""></textarea>
<br /><br />
      <button className="btn-agregar" onClick={onSubmit}>Agregar categoria</button>
    </div>
  );
};

export default FormAgregarCategoria;
