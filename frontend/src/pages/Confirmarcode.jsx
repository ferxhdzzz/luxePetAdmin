import React from 'react';
import { useNavigate } from 'react-router-dom'; // Siempre se tiene que exportar useNavigate para la navegación
import './Recuperacion.css'; // Importando el archivo CSS para estilos

function Confirmarcodigo() {
  const navigate = useNavigate(); // Usamos useNavigate para la navegación programática

  // Función que se ejecuta cuando se hace clic en el botón para enviar el código
  const handleLogin = () => {

    navigate('/actualizar');

  };

  return (
    <div className="EnviaryAct">
      {/* LOGO FIJO ARRIBA IZQUIERDA */}
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" /> {/* Logo de LuxePet en la esquina superior izquierda */}

      {/* Contenedor de la imagen */}
      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" /> {/* Imagen de vista previa de la app */}
      </div>

      {/* Contenedor del formulario */}
      <div className="form-containert">
        <h2 className="titlet">Recuperar Contraseña</h2> {/* Título de la sección */}
        <br /><br />
        <br /><br /><br />
        
        {/* Campo de correo */}
       

        {/* Campo para el código de confirmación */}
        <div className="form-group">
          <label className="label">Código de confirmación</label> {/* Etiqueta para el campo de código */}
          <input type="text" className="inputt" placeholder="" /> {/* Campo de entrada para el código */}
        </div>
        <br />
      


 
        <button className="buttonn" onClick={handleLogin}>Confirmar Codigo</button>

      </div>
      
    </div>
  );
}

export default Confirmarcodigo;  