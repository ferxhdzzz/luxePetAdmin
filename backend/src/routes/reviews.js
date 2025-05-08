import express from "express";
import reviewsController from "../controllers/reviewsController.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(reviewsController.getReviews) //mostrar
.post(reviewsController.createReviews) //agregar

router.route("/:id")

.put(reviewsController.updateReviews) //actualizar
.delete(reviewsController.deleteReviews) //borrar

export default router;

