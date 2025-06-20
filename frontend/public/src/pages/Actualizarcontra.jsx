import React from 'react';
// Hook de React Router para redireccionar entre rutas programáticamente
import { useNavigate } from 'react-router-dom'; // Siempre se tiene que exportar useNavigate para la navegación
import './recupaeracion.css'; // Importa los estilos específicos del formulario de recuperación

// Componente para actualizar la contraseña
function ActualizarContra() {

  const navigate = useNavigate(); // Inicializa el hook para poder navegar a otras rutas

  // Función que se ejecuta al hacer clic en el botón para redirigir al usuario
  const handleLogin = () => {

    navigate('/login');
  
  };

  return (
    <div className="EnviaryAct">
      {/* LOGO FIJO ARRIBA IZQUIERDA */}
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" />

      {/* Contenedor de la imagen del lado derecho */}
      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" />
      </div>

      {/* Contenedor del formulario de actualización */}
      <div className="form-containert">
        <h2 className="titlet">Nueva contraseña</h2>
        <br /><br />

        {/* Campo de entrada para la nueva contraseña */}
        <div className="form-group">
          <label className="label">Contraseña nueva</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />

        {/* Campo de entrada para confirmar la nueva contraseña */}
        <div className="form-group">
          <label className="label">Confirmacion de contraseña</label>
          <input type="text" className="inputt" placeholder="" />
        </div>
        <br />
        <br />


        {/* Botón que actualiza y redirige */}


        <button className="buttonn" onClick={handleLogin}>Actualizar</button>
      </div>
    </div>
  );
}

export default ActualizarContra; // Exporta el componente para ser usado en otras partes del proyecto
