import express from "express";
import suppliersController from "../controllers/supplierscontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(suppliersController.getSuppliers) //mostrar
.post(suppliersController.createSupplier) //agregar

router.route("/:id")

.put(suppliersController.updateSuppliers) //actualizar
.delete(suppliersController.deleteSuppliers) //borrar

export default router;
