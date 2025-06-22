import { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/employees');
      if (!response.ok) {
        throw new Error('Error al conectar con el servidor.');
      }

      const employees = await response.json();
      const employee = employees.find(
        (emp) => emp.email === email && emp.password === password
      );

      if (employee) {
        // Opcional: guardar información del usuario en localStorage
        localStorage.setItem('user', JSON.stringify({ email: employee.email, name: employee.name }));
        navigate('/menum');
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Hubo un problema al intentar iniciar sesión. Inténtalo de nuevo.');
    }
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

        <form onSubmit={handleLogin}>
          {/* Cuadro de texto para ingresar el correo */}
          <div className="form-group">
            <label className="label">Correo</label>
            <input
              className="input"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Cuadro de texto para ingresar la contraseña */}
          <div className="form-group">
            <label className="label">Contraseña</label>
            <input
              type="password"
              className="input"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

        {/* Enlace para recuperar la contraseña */}
        <br /><br />
        <br /><br />
          {/* Botón de login que redirige a la página de productos */}
          <button type="submit" className="button-login">Iniciar sesión</button>
        </form>

        {/* Enlace para registrarse si no se tiene cuenta */}
        <div className="link-container">
          <Link to="/enviar" className="link">¿Olvidaste la contraseña?</Link>
          <Link to="/register" className="link">¿No tienes cuenta? Regístrate</Link>
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
