import React, { useState } from "react";
import CardEmpleado from "../components/CardEmpleado";

// Datos de ejemplo basados en la imagen proporcionada
const empleadosIniciales = [
  {
    nombre: "Jennifer Huh",
    cargo: "Empleado",
    telefono: "(503) 555-0118",
    email: "jennifer@microsoft.com",
  },
  {
    nombre: "José Martínez",
    cargo: "Técnico",
    telefono: "(503) 555-0100",
    email: "jose@yahoo.com",
  },
  {
    nombre: "Ronald Richards",
    cargo: "Secretario",
    telefono: "(503) 555-0107",
    email: "ronald@adobe.com",
  },
  {
    nombre: "Kevin Cruz",
    cargo: "Empleado",
    telefono: "(503) 555-0126",
    email: "kevin@tesla.com",
  },
  {
    nombre: "Romell Díaz",
    cargo: "Empleado",
    telefono: "(503) 555-0129",
    email: "romell@google.com",
  },
  {
    nombre: "Karina Yu",
    cargo: "Técnico",
    telefono: "(503) 555-0120",
    email: "katarina@microsoft.com",
  },
  {
    nombre: "Giselle Hernandez",
    cargo: "Empleado",
    telefono: "(503) 555-0112",
    email: "gisi@yahoo.com",
  },
  {
    nombre: "Kristin Watson",
    cargo: "Secretario",
    telefono: "(503) 555-0127",
    email: "kristin@facebook.com",
  }
];

function Empleados() {
  const [empleados, setEmpleados] = useState(empleadosIniciales);

  const handleEditar = (empleado) => {
    console.log("Editar empleado:", empleado);
    // Aquí se conectará al backend para editar el empleado
  };

  const handleEliminar = (empleado) => {
    console.log("Eliminar empleado:", empleado);
    // Aquí se implementaría la lógica para eliminar al empleado
    // Por ahora, solo simulamos la eliminación
    setEmpleados(empleados.filter(emp => emp.nombre !== empleado.nombre));
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#F3F9FF", minHeight: "100vh" }}>
      <CardEmpleado
        titulo="Empleados"
        empleados={empleados}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default Empleados;
