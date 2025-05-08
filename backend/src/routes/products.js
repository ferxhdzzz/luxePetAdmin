import express from "express";
import productsController from "../controllers/productsController.js";

const  router = express.Router();

router.route("/")
    .get(productsController.getProducts)
    .post(productsController.createProduct);
router
    .route("/:id")
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct);

export default router;
