// Array de métodos (C R U D)
const productsController = {};
import productsModel from "../models/Products.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";
import fs from "fs";

// Configurar Cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

// SELECT - Obtener todos los productos
productsController.getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.json(products);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

// SELECT - Obtener productos por categoría
productsController.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productsModel.find({ idCategory: category });
    res.json(products);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error al obtener productos por categoría" });
  }
};

// INSERT - Crear un nuevo producto con imagen
productsController.createProduct = async (req, res) => {
  try {
    const { nameProduct, amount, productDescription, price, size, idSupplier, idCategory } = req.body;
    let imageUrl = "";

    // Subir imagen a Cloudinary si existe
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "luxepet/productos",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageUrl = result.secure_url;
      
      // Eliminar archivo temporal después de subir a Cloudinary
      fs.unlinkSync(req.file.path);
    }

    const newProduct = new productsModel({
      nameProduct,
      amount,
      productDescription,
      price,
      size,
      idSupplier,
      idCategory,
      image: imageUrl
    });

    await newProduct.save();
    res.json({ message: "Producto guardado correctamente", product: newProduct });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

// DELETE - Eliminar un producto
productsController.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productsModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};

// UPDATE - Actualizar un producto con posible nueva imagen
productsController.updateProduct = async (req, res) => {
  try {
    const { nameProduct, amount, productDescription, price, size, idSupplier, idCategory } = req.body;
    let imageUrl;

    // Subir nueva imagen a Cloudinary si existe
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "luxepet/productos",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageUrl = result.secure_url;
      
      // Eliminar archivo temporal después de subir a Cloudinary
      fs.unlinkSync(req.file.path);
    }

    const updatedProduct = await productsModel.findByIdAndUpdate(
      req.params.id,
      {
        nameProduct,
        amount,
        productDescription,
        price,
        size,
        idSupplier,
        idCategory,
        ...(imageUrl && { image: imageUrl }),
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    
    res.json({ message: "Producto actualizado correctamente", product: updatedProduct });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};

export default productsController;

