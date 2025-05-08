import express from "express";
import customersController from "../controllers/customerscontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(customersController.getCustomers) //mostrar
.post(customersController.createCustomer) //agregar

router.route("/:id")

.put(customersController.updateCustomer) //actualizar
.delete(customersController.deleteCustomer) //borrar

export default router;
