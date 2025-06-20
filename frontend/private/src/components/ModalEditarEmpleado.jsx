import React from "react";
import "./ModalEditarEmpleado.css";

const ModalEditarEmpleado = ({ 
  visible, 
  onClose, 
  formData, 
  onChange, 
  onSubmit,
  esNuevo = false
}) => {
  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos requeridos estén completos
    const { nombre, cargo, telefono, email } = formData;
    if (!nombre || !cargo || !telefono || !email) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{esNuevo ? "Agregar Empleado" : "Editar Empleado"}</h2>
          <button className="btn-cerrar" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={onChange}
                className="form-control"
                required
                placeholder="Nombre"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={onChange}
                className="form-control"
                required
                placeholder="Apellido"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cargo">Cargo</label>
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={onChange}
                className="form-control"
                required
                placeholder="Cargo"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefono">Número de teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={onChange}
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className="form-control"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">
                Contraseña {esNuevo ? "*" : "(dejar en blanco para mantener la actual)"}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password || ""}
                onChange={onChange}
                className="form-control"
                required={esNuevo}
                placeholder={esNuevo ? "Contraseña" : "••••••••"}
              />
            </div>
          </div>

          {/* Se eliminó la sección de subir imágenes para simplificar la interfaz */}
          
          <div className="modal-footer">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-guardar">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarEmpleado;
