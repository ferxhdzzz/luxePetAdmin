// Array de métodos (C R U D)
const productsController = {};
import productsModel from "../models/Products.js"; 

// SELECT
productsController.getProducts = async (req, res) => {
  const products = await productsModel.find();
  res.json(products);
};

// INSERT
productsController.createProduct = async (req, res) => {
  const { nameProduct, amount, productDescription, price, size, idSupplier, idCategory } = req.body;
  const newProduct = new productsModel({
    nameProduct,
    amount,
    productDescription,
    price,
    size,
    idSupplier,
    idCategory
  });
  await newProduct.save();
  res.json({ message: "Producto guardado" });
};


// DELETE
productsController.deleteProduct = async (req, res) => {
  const deletedProduct = await productsModel.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json({ message: "Producto eliminado" });
};

// UPDATE
productsController.updateProduct = async (req, res) => {
  const { nameProduct, amount, productDescription, price, size, idSupplier, idCategory } = req.body;
  const updatedProduct = await productsModel.findByIdAndUpdate(
    req.params.id,
    {
      nameProduct,
      amount,
      productDescription,
      price,
      size,
      idSupplier,
      idCategory
    },
    { new: true }
  );
  if (!updatedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json({ message: "Producto actualizado", product: updatedProduct });
};

export default productsController;
