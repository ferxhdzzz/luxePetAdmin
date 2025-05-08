import express from "express";
import employeesController from "../controllers/employeescontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(employeesController.getEmployees) //mostrar
.post(employeesController.createEmployees) //agregar

router.route("/:id")

.put(employeesController.updateEmployees) //actualizar
.delete(employeesController.deleteEmployees) //borrar

export default router;