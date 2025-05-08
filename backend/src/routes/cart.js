import express from "express";
import cartController from "../controllers/cartController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(cartController.getcart) //mostrar
.post(cartController.createcart) //agregar

router.route("/:id")

.put(cartController.updatecart) //actualizar
.delete(cartController.deletecart) //borrar

export default router;

