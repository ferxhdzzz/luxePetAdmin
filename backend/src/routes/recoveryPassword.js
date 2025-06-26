import express from "express";
import recoveryPasswordController from "../controllers/recoveryPasswordcontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/requestCode").post( recoveryPasswordController.requestCode) 
router.route("/verifyCode").post(recoveryPasswordController.verifyCode) 
router.route("/newPassword").post(recoveryPasswordController.newPassword) //agregar
export default router;