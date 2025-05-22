import React from "react";
import CardHistorial from "../components/CardHistorialcp";

const historial = [
  {
    nombre: "Jennifer Huh",
    telefono: "(503) 555–0118",
    email: "jennifer@microsoft.com",
    compra: ["Croquetas", "Juguete", "Correa","Croquetas", "Juguete", "Correa"],
  },
,
  {
    nombre: "José Martínez",
    telefono: "(503) 555–0100",
    email: "jose@yahoo.com",

  },
  {
    nombre: "José Martínez",
    telefono: "(503) 555–0100",
    email: "jose@yahoo.com",
  },
  {
    nombre: "José Martínez",
    telefono: "(503) 555–0100",
    email: "jose@yahoo.com",
  },
  {
    nombre: "José Martínez",
    telefono: "(503) 555–0100",
    email: "jose@yahoo.com",
  },
  // Más proveedores...
];

function Historial() {
  const handleEliminar = (nombre) => {
    console.log("Eliminar historial:", nombre);
    // Aquí se conecta al backend
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
      <CardHistorial
        titulo="Historial de registros"
        historial={historial}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default Historial;
