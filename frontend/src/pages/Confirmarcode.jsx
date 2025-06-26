import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecovery from '../hooks/recuperacion/useData/useDataRecovery'; // Ruta ajustada
import './Recuperacion.css';

function Confirmarcodigo() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const { verifyCode, loading, error, setError } = useRecovery();

 const handleLogin = async () => {
  if (!code.trim()) {
    setError("Ingresa el código de verificación");
    return;
  }

  const success = await verifyCode(code);

  if (success) {
    navigate("/actualizar");
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
          <label className="label">Código de confirmación</label>
          <input
            type="text"
            className="inputt"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        <br />

        <button className="buttonn" onClick={handleLogin} disabled={loading}>
          {loading ? "Verificando..." : "Confirmar Código"}
        </button>
      </div>
    </div>
  );
}

export default Confirmarcodigo;
