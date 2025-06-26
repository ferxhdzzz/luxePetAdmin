import React, { useState } from "react";
import "./AgregarcatCard.css";

const FormAgregarCategoria = ({
  categoryName,
  setCategoryName,
  description,
  setDescription,
  agregarCategorias,
  handleEdit,
  id,
  onImageChange
}) => {
  const [error, setError] = useState("");

  // Solo valida si es agregar (no editar)
  const handleAgregar = (e) => {
    e.preventDefault();

    if (!categoryName.trim() || !description.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setError(""); // Limpia errores si está todo bien
    agregarCategorias(e);
  };

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

      <label>Nombre: </label>
      <input
        type="text"
        value={categoryName || ""}
        onChange={(e) => setCategoryName(e.target.value)}
      />

      <br /><br />
      <label>Descripción:</label>
      <textarea
        value={description || ""}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <br /><br />
      {error && <p className="error-message">{error}</p>}

      {!id ? (
        <button
          type="submit"
          className="btn-agregar"
          onClick={handleAgregar}
        >
          Guardar
        </button>
      ) : (
        <button
          type="submit"
          className="btn-agregar"
          onClick={(e) => handleEdit(e)}
        >
          Editar
        </button>
      )}
    </div>
  );
};

export default FormAgregarCategoria;