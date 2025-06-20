import React from 'react';
import { useNavigate } from 'react-router-dom'; // Siempre se tiene que exportar useNavigate para la navegación
import './Register.css';

function Register() {
  const navigate = useNavigate();

  // una funcion para conectar paginas entre si (registro con productos)
  const handleLogin = () => {
    navigate('/products');
  };

  return (
    // contenedor principal de la página de registro
    <div className="pagee">
      {/* Sección izquierda con formulario de registro */}
      <div className="left-section">
        <img src="/luxe.svg" alt="Logo LuxePet" className="logo" />

        {/* descripción */}
        <p className="description">
          Bienvenido a LuxePet, donde el lujo y el cuidado de tu mascota se unen. Regístrate para comenzar a consentir a tu mejor amigo.
        </p>

        {/* título del formulario */}
        <h2 className="title">Crear Cuenta</h2>

        {/* campo para el nombre */}
        <div className="form-group">
          <label className="label">Nombre</label>
          <input type="text" className="input" placeholder="" />
        </div>

        {/* campo para el apellido */}
        <div className="form-group">
          <label className="label">Apellido</label>
          <input type="text" className="input" placeholder="" />
        </div>

        {/* campo para el nombre de usuario */}
        <div className="form-group">
          <label className="label">Usuario</label>
          <input type="text" className="input" placeholder="" />
        </div>

        {/* campo para la contraseña */}
        <div className="form-group">
          <label className="label">Contraseña</label>
          <input type="password" className="input" placeholder="" />
        </div>

        {/* campo para la fecha de nacimiento */}
        <div className="form-group">
          <label className="label">Fecha de nacimiento</label>
          <input type="date" className="input" />
        </div>

        {/* botón para enviar el formulario y navegar hacia /products */}
        <button className="button-login" onClick={handleLogin}>Ingresar</button>

        {/* enlace para redirigir al usuario a la página de login si ya tiene cuenta */}
        <div className="register-container">
          <p>¿Ya tienes una cuenta? <a href="/login" className="link">Iniciar sesión</a></p>
        </div>
      </div>

      {/* Sección derecha con imagen de vista previa de la aplicación */}
      <div className="right-section">
        <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c564dfc5c3d1ae92f6e6c4e980a0.jpg" alt="App Preview" className="right-image" />
      </div>
    </div>
  );
}

export default Register; 