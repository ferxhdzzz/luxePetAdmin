const employeesController = {};

import employeesModel from "../models/Employees.js";

//get - select

employeesController.getEmployees = async (req, res) => {

    const employees = await employeesModel.find()
    res.json (employees)
}

//post - agregar
          
employeesController.createEmployees = async (req, res) => {
    try {
        const { name, lastName, email, telefono, password, typeEmployee } = req.body;
        
        // Validar que todos los campos requeridos estén presentes
        if (!name || !lastName || !email || !telefono || !password || !typeEmployee) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }
        
        // Crear el nuevo empleado con los campos actualizados
        const newemployee = new employeesModel({
            name,
            lastName,
            email,
            telefono,
            password,
            typeEmployee
        });
        
        // Guardar en la base de datos
        const savedEmployee = await newemployee.save();
        
        // Devolver el empleado creado
        res.status(201).json({
            message: "Empleado guardado correctamente",
            employee: savedEmployee
        });
    } catch (error) {
        console.error("Error al crear empleado:", error);
        res.status(500).json({
            message: "Error al guardar el empleado", 
            error: error.message
        });
    }
}
 
//delete

employeesController.deleteEmployees = async (req, res) => {
  try {
    // Usar findByIdAndDelete que es más adecuado para eliminar por ID
    const eliminado = await employeesModel.findByIdAndDelete(req.params.id);
    
    if (!eliminado) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    
    res.json({
      message: "Empleado eliminado correctamente",
      eliminado
    });
  } catch (error) {
    console.error("Error al eliminar empleado:", error);
    res.status(500).json({ message: "Error al eliminar el empleado", error: error.message });
  }
}

// actualizar - post

employeesController.updateEmployees = async (req, res) => {
  try {
    const { name, lastName, email, telefono, password, typeEmployee } = req.body;
    
    // Validar que todos los campos requeridos estén presentes
    if (!name || !lastName || !email || !telefono || !typeEmployee) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }
    
    // Preparar objeto con los datos a actualizar
    const datosActualizados = {
      name,
      lastName,
      email,
      telefono,
      typeEmployee
    };
    
    // Solo actualizar password si se proporciona uno nuevo
    if (password) {
      datosActualizados.password = password;
    }
    
    // Usamos {new: true} para devolver el documento actualizado
    const empleadoActualizado = await employeesModel.findByIdAndUpdate(
      req.params.id,
      datosActualizados,
      { new: true, runValidators: true }
    );
    
    if (!empleadoActualizado) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    
    // Devolver el empleado actualizado para que el frontend pueda actualizar la vista
    res.json({
      message: "Empleado actualizado correctamente",
      empleado: empleadoActualizado
    });
  } catch (error) {
    console.error("Error al actualizar empleado:", error);
    res.status(500).json({ 
      message: "Error al actualizar el empleado", 
      error: error.message 
    });
  }
}

export default employeesController;