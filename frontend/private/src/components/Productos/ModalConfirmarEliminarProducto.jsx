import React from "react";
import "./ModalConfirmarEliminarProducto.css";

const ModalConfirmarEliminarProducto = ({ visible, onClose, onConfirm, producto }) => {
  if (!visible || !producto) return null;

  return (
    <div className="modal-overlay-eliminar">
      <div className="modal-content-eliminar">
        <div className="modal-header-eliminar">
          <h2>Confirmar Eliminación</h2>
          <button className="btn-cerrar-eliminar" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body-eliminar">
          <p>¿Estás seguro de eliminar este producto?</p>
          <div className="producto-info">
            {producto.image && (
              <div className="producto-imagen-container">
                <img 
                  src={producto.image} 
                  alt={producto.nameProduct} 
                  className="producto-imagen" 
                />
              </div>
            )}
            <div className="producto-detalles">
              <p><strong>Nombre:</strong> {producto.nameProduct}</p>
              <p><strong>Precio:</strong> ${producto.price?.toFixed(2)}</p>
              <p><strong>Categoría:</strong> {producto.idCategory}</p>
            </div>
          </div>
          <p className="advertencia">Esta acción no se puede deshacer.</p>
        </div>
        
        <div className="modal-footer-eliminar">
          <button type="button" className="btn-cancelar-eliminar" onClick={onClose}>
            Cancelar
          </button>
          <button 
            type="button" 
            className="btn-eliminar" 
            onClick={() => onConfirm(producto._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmarEliminarProducto;
