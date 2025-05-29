import React from "react";
import "./ModalConfirmarEliminar.css";

const ModalConfirmarEliminar = ({ visible, onClose, onConfirm, empleado }) => {
  if (!visible || !empleado) return null;

  return (
    <div className="modal-overlay-eliminar">
      <div className="modal-content-eliminar">
        <div className="modal-header-eliminar">
          <h2>Confirmar Eliminación</h2>
          <button className="btn-cerrar-eliminar" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body-eliminar">
          <p>¿Estás seguro de eliminar este empleado?</p>
          <div className="empleado-info">
            <p><strong>Nombre:</strong> {empleado.nombre}</p>
            <p><strong>Cargo:</strong> {empleado.cargo}</p>
            <p><strong>Email:</strong> {empleado.email}</p>
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
            onClick={() => onConfirm(empleado.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmarEliminar;
