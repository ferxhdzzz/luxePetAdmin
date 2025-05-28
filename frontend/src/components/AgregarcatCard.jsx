import React from "react";
import "./AgregarcatCard.css";

const FormAgregarCategoria = ({ onSubmit, onImageChange,    setNameCategory,
       setDescription,
       nameCategory,
      description,
      agregarCategorias
}) => {

const handleSave= () => {
  alert("en el guardar")
      agregarCategorias()


  }


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
      <label >Nombre: {nameCategory}</label>
      <input type="text" placeholder="" 
      value={nameCategory}
      onChange={(e)=> setNameCategory(e.target.value)}/>
      <br /><br />
      <label >Descripción: {description}</label>
      <textarea placeholder=""
      value={description}
      onChange={(e)=> setDescription(e.target.value)}
      ></textarea>
      <br /><br />
      <button className="btn-agregar" onClick={handleSave}>Agregar</button>
    </div>
  );
};

export default FormAgregarCategoria;