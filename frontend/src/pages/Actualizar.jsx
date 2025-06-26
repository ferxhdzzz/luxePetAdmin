import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecovery from '../hooks/recuperacion/useData/useDataRecovery';
import './Recuperacion.css';

function ActualizarContra() {
  const navigate = useNavigate();
  const { updatePassword, loading, error, setError } = useRecovery();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const validateAndSubmit = async () => {
    setError(""); // limpia errores anteriores

    if (!password || !confirm) {
      setError("Completa todos los campos.");
      return;
    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Debe tener mínimo 8 caracteres y un carácter especial.");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    await updatePassword(password);

    if (!error) {
      navigate("/login");
    }
  };

  return (
    <div className="EnviaryAct">
      <img src="/luxe.svg" alt="Logo LuxePet" className="logo-fixed" />

      <div className="image-containert">
        <img src="/lxpet.png" alt="App Preview" className="right-imaget" />
      </div>

      <div className="form-containert">
        <h2 className="titlet">Nueva contraseña</h2>
        <br /><br />

        <div className="form-group">
          <label className="label">Contraseña nueva</label>
          <input
            type="password"
            className="inputt"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />

        <div className="form-group">
          <label className="label">Confirmación de contraseña</label>
          <input
            type="password"
            className="inputt"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        <br /><br />

        <button className="buttonn" onClick={validateAndSubmit} disabled={loading}>
          {loading ? "Actualizando..." : "Actualizar"}
        </button>
      </div>
    </div>
  );
}

export default ActualizarContra;
