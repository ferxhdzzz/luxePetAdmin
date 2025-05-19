import React from "react";
import CardProveedor from "../components/CardProveedor";

const proveedores = [
  {
    nombre: "Jennifer Huh",
    telefono: "(503) 555–0118",
    email: "jennifer@microsoft.com",
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
  {
    nombre: "José Martínez",
    telefono: "(503) 555–0100",
    email: "jose@yahoo.com",
  },
  // Más proveedores...
];

function Proveedor() {
  const handleEliminar = (nombre) => {
    console.log("Eliminar proveedor:", nombre);
    // Aquí se conecta al backend
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
      <CardProveedor
        titulo="Proveedores"
        proveedores={proveedores}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default Proveedor;