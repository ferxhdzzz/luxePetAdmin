import { useState, useEffect, useCallback } from "react";

/**
 * Hook para gestionar las operaciones CRUD de empleados
 * @returns {Object} Métodos y estados para gestionar empleados
 */
export const useEmpleados = () => {
  // Estado para almacenar la lista de empleados
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Estado para el modal de edición
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [empleadoEditar, setEmpleadoEditar] = useState(null);

  // Estado para el modal de eliminación
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [empleadoEliminar, setEmpleadoEliminar] = useState(null);

  // Estado para el formulario de empleado
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: "",
    telefono: "",
    email: ""
  });
  
  /**
   * URL base de la API
   */
  const API_URL = 'http://localhost:4000/api/employees';
  
  /**
   * Convierte un empleado del formato del backend al formato del frontend
   * @param {Object} backendEmpleado - Empleado en formato del backend
   * @returns {Object} - Empleado en formato del frontend
   */
  const convertirAFormatoFrontend = (backendEmpleado) => {
    return {
      id: backendEmpleado._id,
      nombre: backendEmpleado.name || '',
      apellido: backendEmpleado.lastName || '',
      cargo: backendEmpleado.typeEmployee || '',
      telefono: backendEmpleado.telefono || '',
      email: backendEmpleado.email || ''
    };
  };
  
  /**
   * Convierte un empleado del formato del frontend al formato del backend
   * @param {Object} frontendEmpleado - Empleado en formato del frontend
   * @param {boolean} esNuevo - Indica si es un nuevo empleado (true) o una edición (false)
   * @returns {Object} - Empleado en formato del backend
   */
  const convertirAFormatoBackend = (frontendEmpleado, esNuevo = false) => {
    // Crear el objeto base
    const empleadoBackend = {
      name: frontendEmpleado.nombre,
      lastName: frontendEmpleado.apellido,
      email: frontendEmpleado.email,
      telefono: frontendEmpleado.telefono,
      typeEmployee: frontendEmpleado.cargo
    };
    
    // Solo agregar contraseña si es un empleado nuevo o si se proporciona una nueva contraseña
    if (esNuevo) {
      // Para nuevos empleados, usar la contraseña proporcionada o una predeterminada
      empleadoBackend.password = frontendEmpleado.password || '12345678';
    } else if (frontendEmpleado.password && frontendEmpleado.password.trim() !== '') {
      // Para empleados existentes, solo incluir contraseña si se proporcionó una nueva
      empleadoBackend.password = frontendEmpleado.password;
    }
    
    return empleadoBackend;
  };

  /**
   * Obtiene la lista de empleados desde la API
   */
  const obtenerEmpleados = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('Obteniendo empleados desde:', API_URL);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('Datos recibidos del servidor:', data);
      
      // Convertir cada empleado al formato del frontend
      const empleadosFormateados = data.map(emp => convertirAFormatoFrontend(emp));
      
      setEmpleados(empleadosFormateados);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
      setError("No se pudieron cargar los empleados. Intente nuevamente.");
      setLoading(false);
      
      // Simulación para desarrollo si el backend no está disponible
      if (import.meta && import.meta.env && import.meta.env.DEV) {
        setTimeout(() => {
          // Datos de prueba
          const empleadosData = [
            {
              id: 1,
              nombre: "Jane Cooper",
              cargo: "Gerente",
              telefono: "(503) 555-0123",
              email: "jane@microsoft.com"
            },
            {
              id: 2,
              nombre: "Wade Warren",
              cargo: "Vendedor",
              telefono: "(503) 555-0125",
              email: "wade@apple.com"
            },
            {
              id: 3,
              nombre: "Kristin Watson",
              cargo: "Secretario",
              telefono: "(503) 555-0127",
              email: "kristin@facebook.com"
            }
          ];
          
          setEmpleados(empleadosData);
          setLoading(false);
        }, 500);
      }
    }
  }, [API_URL]);

  // Cargar empleados al montar el componente
  useEffect(() => {
    obtenerEmpleados();
  }, [obtenerEmpleados]);

  /**
   * Crea un nuevo empleado
   * @param {Object} nuevoEmpleado - Datos del nuevo empleado en formato frontend
   */
  const crearEmpleado = async (nuevoEmpleado) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convertir al formato que espera el backend - pasamos true porque es un nuevo empleado
      const empleadoBackend = convertirAFormatoBackend(nuevoEmpleado, true);
      
      console.log('Enviando datos al backend:', empleadoBackend);
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(empleadoBackend),
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const resultado = await response.json();
      console.log('Resultado de crear empleado:', resultado);
      
      // Recargar la lista de empleados para asegurar que tenemos los datos actualizados
      obtenerEmpleados();
      
      setLoading(false);
      return resultado;
    } catch (error) {
      console.error("Error al crear empleado:", error);
      setError("No se pudo crear el empleado. Intente nuevamente.");
      setLoading(false);
      
      // Simulación para desarrollo si el backend no está disponible
      if (import.meta && import.meta.env && import.meta.env.DEV) {
        setTimeout(() => {
          const nuevoId = empleados.length > 0 ? Math.max(...empleados.map(e => e.id)) + 1 : 1;
          const empleadoConId = { ...nuevoEmpleado, id: nuevoId };
          
          setEmpleados(prevEmpleados => [...prevEmpleados, empleadoConId]);
          setLoading(false);
          
          return { message: "Empleado creado con éxito (simulación)" };
        }, 500);
      }
      
      return { error: error.message };
    }
  };

  /**
   * Actualiza un empleado existente
   * @param {string} id - ID del empleado a actualizar
   * @param {Object} datosActualizados - Nuevos datos del empleado en formato frontend
   */
  const actualizarEmpleado = async (id, datosActualizados) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convertir los datos actualizados al formato del backend - pasamos false porque es una edición
      const datosBackend = convertirAFormatoBackend(datosActualizados, false);
      
      console.log(`Actualizando empleado con ID: ${id}`, datosBackend);
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosBackend),
      });
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const resultado = await response.json();
      console.log('Respuesta de actualizar empleado:', resultado);
      
      // Recargar la lista de empleados para asegurar que tenemos los datos actualizados
      obtenerEmpleados();
      
      // Cerrar el modal y limpiar
      setModalEditarVisible(false);
      setEmpleadoEditar(null);
      setLoading(false);
      
      return resultado;
    } catch (error) {
      console.error("Error al actualizar empleado:", error);
      setError("No se pudo actualizar el empleado. Intente nuevamente.");
      setLoading(false);
      
      // Simulación para desarrollo si el backend no está disponible
      if (import.meta && import.meta.env && import.meta.env.DEV) {
        setTimeout(() => {
          setEmpleados(
            prevEmpleados => prevEmpleados.map(emp => 
              emp.id === id ? { ...emp, ...datosActualizados } : emp
            )
          );
          setModalEditarVisible(false);
          setEmpleadoEditar(null);
          setLoading(false);
          
          return { message: "Empleado actualizado con éxito (simulación)" };
        }, 500);
      }
      
      return { error: error.message };
    }
  };

  /**
   * Elimina un empleado
   * @param {string} id - ID del empleado a eliminar
   */
  const eliminarEmpleado = async (id) => {
    setLoading(true);
    setError(null);
    
    try {
      console.log(`Intentando eliminar empleado con ID: ${id}`);
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error de servidor:', errorData);
        throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
      }
      
      // Procesar la respuesta
      const resultado = await response.json();
      console.log('Respuesta del servidor al eliminar:', resultado);
      
      // Recargar la lista de empleados para asegurar que tenemos datos actualizados
      obtenerEmpleados();
      
      // Cerrar el modal y limpiar
      setModalEliminarVisible(false);
      setEmpleadoEliminar(null);
      setLoading(false);
      
      return resultado;
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
      setError("No se pudo eliminar el empleado. Intente nuevamente.");
      setLoading(false);
      
      // Simulación para desarrollo si el backend no está disponible
      if (import.meta && import.meta.env && import.meta.env.DEV) {
        setTimeout(() => {
          setEmpleados(prevEmpleados => prevEmpleados.filter(emp => emp.id !== id));
          setModalEliminarVisible(false);
          setEmpleadoEliminar(null);
          setLoading(false);
          
          return { message: "Empleado eliminado con éxito (simulación)" };
        }, 500);
      }
      
      return { error: error.message };
    }
  };

  /**
   * Abre el modal de edición con los datos del empleado seleccionado
   * @param {Object} empleado - Empleado a editar
   */
  const abrirModalEditar = (empleado) => {
    setEmpleadoEditar(empleado);
    setFormData({
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      cargo: empleado.cargo,
      telefono: empleado.telefono,
      email: empleado.email
    });
    setModalEditarVisible(true);
  };

  /**
   * Cierra el modal de edición
   */
  const cerrarModalEditar = () => {
    setModalEditarVisible(false);
    setEmpleadoEditar(null);
  };

  /**
   * Abre el modal de confirmación de eliminación
   * @param {Object} empleado - Empleado a eliminar
   */
  const abrirModalEliminar = (empleado) => {
    setEmpleadoEliminar(empleado);
    setModalEliminarVisible(true);
  };

  /**
   * Cierra el modal de confirmación de eliminación
   */
  const cerrarModalEliminar = () => {
    setModalEliminarVisible(false);
    setEmpleadoEliminar(null);
  };

  /**
   * Maneja los cambios en el formulario
   * @param {Event} e - Evento del formulario
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return {
    // Estados
    empleados,
    loading,
    error,
    formData,
    modalEditarVisible,
    modalEliminarVisible,
    empleadoEditar,
    empleadoEliminar,
    
    // Métodos CRUD
    obtenerEmpleados,
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado,
    
    // Métodos de modales
    abrirModalEditar,
    cerrarModalEditar,
    abrirModalEliminar,
    cerrarModalEliminar,
    
    // Métodos de formulario
    handleInputChange,
    setFormData
  };
};
