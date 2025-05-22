import React, { useState } from "react";
import "./FormularioProducto.css";

const FormularioProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const [talla, setTalla] = useState("S");
  const [productoInfo, setProductoInfo] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductoInfo({
      ...productoInfo,
      [name]: value,
    });
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSubirImagen = () => {
    console.log("Subir imagen");
    // Aquí iría la lógica para subir una imagen
  };

  return (
    <div className="formulario-producto-container">
      <h2>Agregar Producto</h2>
      <div className="formulario-producto">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre del producto</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={productoInfo.nombre}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={productoInfo.precio}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group cantidad-group">
            <label>Cantidad</label>
            <div className="cantidad-control">
              <button
                type="button"
                className="btn-cantidad btn-dec"
                onClick={decrementarCantidad}
              >
                -
              </button>
              <span className="cantidad-valor">{cantidad}</span>
              <button
                type="button"
                className="btn-cantidad btn-inc"
                onClick={incrementarCantidad}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group descripcion-group">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={productoInfo.descripcion}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
            ></textarea>
          </div>
          <div className="form-group tallas-subir-group">
            <div className="tallas-group">
              <label>Talla</label>
              <div className="tallas-options">
                <button
                  type="button"
                  className={`talla-btn ${talla === "S" ? "active" : ""}`}
                  onClick={() => setTalla("S")}
                >
                  S
                </button>
                <button
                  type="button"
                  className={`talla-btn ${talla === "M" ? "active" : ""}`}
                  onClick={() => setTalla("M")}
                >
                  M
                </button>
                <button
                  type="button"
                  className={`talla-btn ${talla === "L" ? "active" : ""}`}
                  onClick={() => setTalla("L")}
                >
                  L
                </button>
                <button
                  type="button"
                  className={`talla-btn ${talla === "XL" ? "active" : ""}`}
                  onClick={() => setTalla("XL")}
                >
                  XL
                </button>
              </div>
            </div>
            <div className="subir-imagen-container">
              <button
                type="button"
                className="btn-subir-imagen"
                onClick={handleSubirImagen}
              >
                Subir Imagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioProducto;
