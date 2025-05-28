import express from "express";
import multer from "multer";
import productsController from "../controllers/productsController.js";
import path from "path";
import { fileURLToPath } from "url";

// Configuración para usar __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Multer para almacenamiento temporal
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Configuración del filtro para aceptar solo imágenes
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Formato de archivo no soportado"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

const router = express.Router();

router
  .route("/")
  .get(productsController.getProducts)
  .post(upload.single("image"), productsController.createProduct);

// Ruta para obtener productos por categoría
router.route("/category/:category").get(productsController.getProductsByCategory);

router
  .route("/:id")
  .put(upload.single("image"), productsController.updateProduct)
  .delete(productsController.deleteProduct);

export default router;
