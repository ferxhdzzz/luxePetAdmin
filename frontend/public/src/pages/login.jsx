import React from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  // Función para navegar entre páginas, en este caso al iniciar sesión redirige a la página de productos
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/products');
  };

  return (
    <div className="page">
      <div className="left-section">

        {/* Logo de la tienda */}
        <img src="/luxe.svg" alt="Logo LuxePet" className="logo" />

        {/* Descripción de la tienda y bienvenida */}
        <p className="description">
          Bienvenido a LuxePet, el destino exclusivo para consentir a tu mascota. Inicia sesión para descubrir una selección de artículos diseñados para el bienestar de tu mascota.
        </p>

        {/* Título para la sección de inicio de sesión */}
        <h2 className="title">Iniciar Sesión</h2>

        {/* Cuadro de texto para ingresar el nombre de usuario */}
        <div className="form-group">
          <label className="label">Usuario</label>
          <input type="text" className="input" placeholder="" />
        </div>

        {/* Cuadro de texto para ingresar la contraseña */}
        <div className="form-group">
          <label className="label">Contraseña</label>
          <input type="password" className="input" placeholder="" />
        </div>

        {/* Enlace para recuperar la contraseña */}
        <div className="link-container">
          <Link to="/actualizar" className="link">¿Olvidaste la contraseña?</Link>
        </div>

        {/* Botón de login que redirige a la página de productos */}
        <button className="button-login" onClick={handleLogin}>Iniciar sesión</button>

        {/* Enlace para registrarse si no se tiene cuenta */}
        <div className="register-container">
          <p>¿No tienes cuenta? <a href="/register" className="link">Regístrate</a></p>
        </div>
      </div>

      {/* Imagen que acompaña el login */}
      <div className="right-section">
        <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c564dfc5c3d1ae92f6e6c4e980a0.jpg" alt="App Preview" className="right-image" />
      </div>

    </div>
  );
}

export default Login;
