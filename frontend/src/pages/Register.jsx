import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    telefono: '',
    password: '',
    typeEmployee: 'Empleado', // Valor por defecto
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === '')) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (formData.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        navigate('/'); // Redirige al login
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro.');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert(`Hubo un problema al registrarse: ${error.message}`);
    }
  };

  return (
    <div className="page-register">
      <div className="left-section-register">
        <img src="/luxe.svg" alt="Logo LuxePet" className="logo-register" />
        <p className="description-register">
          Únete a la familia LuxePet. Regístrate para empezar a gestionar el paraíso de las mascotas.
        </p>
        <h2 className="title-register">Crear Cuenta</h2>
        <form onSubmit={handleSubmit} className="form-register">
          <div className="form-group-register">
            <label>Nombre</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group-register">
            <label>Apellido</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group-register">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group-register">
            <label>Teléfono</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
          </div>
          <div className="form-group-register">
            <label>Contraseña</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group-register">
            <label>Tipo de Empleado</label>
            <select name="typeEmployee" value={formData.typeEmployee} onChange={handleChange}>
              <option value="Empleado">Empleado</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
          <button type="submit" className="button-register">Registrarse</button>
        </form>
        <div className="link-container-register">
          <Link to="/" className="link-register">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </div>
      <div className="right-section-register">
        <img src="https://i.pinimg.com/736x/3b/46/38/3b4638d5c31449833834791136b5957b.jpg" alt="App Preview" className="right-image-register" />
      </div>
    </div>
  );
}

export default Register;
