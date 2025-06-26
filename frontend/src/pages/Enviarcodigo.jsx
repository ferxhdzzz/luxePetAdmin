import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecovery from '../hooks/recuperacion/useData/useDataRecovery'; // Asegúrate que la ruta sea correcta
import './Recuperacion.css';

function EnviarCodigo() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { sendCode, loading, error, setError } = useRecovery();

  const handleLogin = async () => {
    if (!email.trim()) {
      setError("Ingresa un correo válido");
      return;
    }

    await sendCode(email);

    if (!error) {
      navigate('/confirmarcode');
    }
  };

  return (
    <div className="EnviaryAct">
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" />

      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" />
      </div>

      <div className="form-containert">
        <h2 className="titlet">Recuperar Contraseña</h2>
        <br /><br /><br /><br /><br />

        <div className="form-group">
          <label className="label">Correo</label>
          <input
            type="email"
            className="inputt"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        <br /><br />

        <button className="buttonn" onClick={handleLogin} disabled={loading}>
          {loading ? "Enviando..." : "Enviar Código"}
        </button>
      </div>
    </div>
  );
}

export default EnviarCodigo;