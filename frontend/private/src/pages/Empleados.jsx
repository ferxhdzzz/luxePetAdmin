import React, { useState, useEffect } from "react";
import CardEmpleado from "../components/CardEmpleado";
import ModalEditarEmpleado from "../components/ModalEditarEmpleado";
import ModalConfirmarEliminar from "../components/ModalConfirmarEliminar";
import { useEmpleados } from "../hooks/useEmpleados";
import { motion } from "framer-motion";
import "./Empleados.css";

// Componente contenedor con animación
const AnimatedContainer = motion.div;

function Empleados() {
  const {
    empleados,
    loading,
    error,
    formData,
    modalEditarVisible,
    modalEliminarVisible,
    empleadoEditar,
    empleadoEliminar,
    obtenerEmpleados,
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado,
    abrirModalEditar,
    cerrarModalEditar,
    abrirModalEliminar,
    cerrarModalEliminar,
    handleInputChange
  } = useEmpleados();
  
  // Refrescar datos cuando hay cambios
  useEffect(() => {
    // Cargar empleados al montar el componente
    obtenerEmpleados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Solo ejecutar al montar el componente para evitar bucles infinitos

  // Estado para el modal de agregar empleado
  const [modalAgregarVisible, setModalAgregarVisible] = useState(false);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    apellido: "",
    cargo: "",
    telefono: "",
    email: "",
    password: ""
  });

  const handleNuevoInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoEmpleado({
      ...nuevoEmpleado,
      [name]: value
    });
  };

  // Eliminamos la función de subida de imágenes para simplificar

  const abrirModalAgregar = () => {
    setModalAgregarVisible(true);
  };

  const cerrarModalAgregar = () => {
    setModalAgregarVisible(false);
    setNuevoEmpleado({
      nombre: "",
      apellido: "",
      cargo: "",
      telefono: "",
      email: "",
      password: ""
    });
  };

  const handleGuardarNuevoEmpleado = () => {
    crearEmpleado(nuevoEmpleado);
    cerrarModalAgregar();
  };

  const handleActualizarEmpleado = () => {
    if (empleadoEditar) {
      actualizarEmpleado(empleadoEditar.id, formData);
    }
  };

  // Función wrapper para manejar la eliminación del empleado seleccionado
  const handleEliminarEmpleado = (id) => {
    console.log('Eliminando empleado con ID:', id);
    eliminarEmpleado(id);
  };

  return (
    <AnimatedContainer 
      className="empleados-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="empleados-header">
        <h1 className="empleados-titulo">Gestión de Empleados</h1>
        <button className="btn-agregar-empleado" onClick={abrirModalAgregar}>
          + Agregar Empleado
        </button>
      </div>
      
      {loading && <div className="loading">Cargando...</div>}
      
      {error && <div className="error-message">{error}</div>}
      
      {!loading && !error && (
        <CardEmpleado
          titulo="Empleados"
          empleados={empleados}
          onEditar={abrirModalEditar}
          onEliminar={abrirModalEliminar}
        />
      )}
      
      {/* Modal para editar empleado */}
      <ModalEditarEmpleado
        visible={modalEditarVisible}
        onClose={cerrarModalEditar}
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleActualizarEmpleado}
      />
      
      {/* Modal para confirmar eliminación */}
      <ModalConfirmarEliminar
        visible={modalEliminarVisible}
        onClose={cerrarModalEliminar}
        onConfirm={handleEliminarEmpleado}
        empleado={empleadoEliminar}
      />
      
      {/* Modal para agregar nuevo empleado */}
      <ModalEditarEmpleado
        visible={modalAgregarVisible}
        onClose={cerrarModalAgregar}
        formData={nuevoEmpleado}
        onChange={handleNuevoInputChange}
        onSubmit={handleGuardarNuevoEmpleado}
        esNuevo={true}
      />
    </AnimatedContainer>
  );
}

export default Empleados;
