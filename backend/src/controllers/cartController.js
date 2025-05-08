const cartController = {};
import cartModel from "../models/Cart.js";

cartController.getcart = async (req, res) => {
  const cart= await cartModel.find();
  res.json(cart);
};

cartController.createcart = async (req, res) => {
  const {  idCostumer,Products,Total,Status, } = req.body;
  const newcart= new cartModel({  idCostumer,Products,Total,Status,});
  await newcart.save();
  res.json({ message: "carrito guardado" });
};

cartController.deletecart = async (req, res) => {
const deletedcart = await cartModel.findByIdAndDelete(req.params.id);
  if (!deletedcart) {
    return res.status(404).json({ message: "carrito no encontrado" });
  }
  res.json({ message: "carrito eliminado" });
};

cartController.updatecart = async (req, res) => {
  // Solicito todos los valores
  const { idCostumer,Products,Total,Status} = req.body;
  // Actualizo
  await cartModel.findByIdAndUpdate(
    req.params.id,
    {
        idCostumer,
        Products,
        Total,
        Status,
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Carrito actualizado" });
};

export default cartController;
