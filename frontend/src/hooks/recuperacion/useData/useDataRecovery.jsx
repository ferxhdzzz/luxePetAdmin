// src/hooks/useRecovery.js
import { useState } from "react";

const API_BASE = "http://localhost:4000/api/recoveryPassword";

const useRecovery = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 1. Enviar código
  const sendCode = async (email) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/recoveryPassword/requestCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok || data.message === "email sent") {
        setSuccess("Código enviado");
      } else {
        setError(data.message || "Error al enviar código");
      }
    } catch (err) {
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  };

  // 2. Verificar código
 const verifyCode = async (code) => {
  setLoading(true);
  setError(null);

  try {
    const res = await fetch("http://localhost:4000/api/recoveryPassword/verifyCode", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    if (!res.ok || data.message !== "verification code successfull") {
      setError(data.message || "Código inválido");
      setLoading(false);
      return false;
    }

    setLoading(false);
    return true;
  } catch (err) {
    setError("Error de red o servidor");
    setLoading(false);
    return false;
  }
};

  // 3. Actualizar contraseña
  const updatePassword = async (newPassword) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/recoveryPassword/newPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
        credentials: "include",
      });
      const data = await res.json();
      if (data.message?.includes("success")) {
        setSuccess("Contraseña actualizada");
      } else {
        setError(data.message || "Error al actualizar");
      }
    } catch (err) {
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return {
    sendCode,
    verifyCode,
    updatePassword,
    loading,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useRecovery;
