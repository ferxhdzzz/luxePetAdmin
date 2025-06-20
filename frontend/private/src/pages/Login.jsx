import React, { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Toaster, toast } from "react-hot-toast";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!usuario || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }
    
    if (Login(usuario, password)) {
      navigate('/menu');
    }
  };

  return (
    <div className="page">
      <div className="left-sectionn">
        {/* Logo de la tienda */}
        <img src="/luxe.svg" alt="Logo LuxePet" className="logo" />

        {/* Descripción de la tienda y bienvenida */}
        <p className="description">
          Bienvenido a LuxePet, el destino exclusivo para consentir a tu mascota. Inicia sesión para descubrir una selección de artículos diseñados para el bienestar de tu mascota.
        </p>

        {/* Formulario de login */}
        <form onSubmit={handleLogin}>
          {/* Título para la sección de inicio de sesión */}
          <h2 className="title">Iniciar Sesión</h2>

          {/* Cuadro de texto para ingresar el nombre de usuario */}
          <div className="form-group">
            <label className="label">Usuario</label>
            <input 
              className="input" 
              type="textt"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresa tu usuario"
              required
            />
          </div>
<br />
          {/* Cuadro de texto para ingresar la contraseña */}
          <div className="form-group">
            <label className="label">Contraseña</label>
            <input 
              type="password" 
              className="input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          {/* Botón de login */}
          <br /><br />
          <button type="submit" className="button-login">
            Iniciar sesión
          </button>

          {/* Enlace para recuperar la contraseña */}
          <div className="link-container">
            <Link to="/enviar" className="link">¿Olvidaste la contraseña?</Link>
          </div>
        </form>
      </div>

      {/* Imagen que acompaña el login */}
      <div className="right-sectionn">
        <img src="https://i.pinimg.com/736x/ee/77/c5/ee77c564dfc5c3d1ae92f6e6c4e980a0.jpg" alt="App Preview" className="right-image" />
      </div>

      {/* Toaster para mostrar notificaciones */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default Login; 