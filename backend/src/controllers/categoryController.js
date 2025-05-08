// Array de métodos (C R U D)
const categoriesController = {};
import categoriesModel from "../models/Category.js"; 

// SELECT
categoriesController.getCategories = async (req, res) => {
  const categories = await categoriesModel.find();
  res.json(categories);
};

// INSERT
categoriesController.createCategory = async (req, res) => {
  const { categoryName, description } = req.body;
  const newCategory = new categoriesModel({ categoryName, description });
  await newCategory.save();
  res.json({ message: "Categoría guardada" });
};

// DELETE
categoriesController.deleteCategory = async (req, res) => {
  const deletedCategory = await categoriesModel.findByIdAndDelete(req.params.id);
  if (!deletedCategory) {
    return res.status(404).json({ message: "Categoría no encontrada" });
  }
  res.json({ message: "Categoría eliminada" });
};

// UPDATE
categoriesController.updateCategory = async (req, res) => {
  const { categoryName, description } = req.body;
  await categoriesModel.findByIdAndUpdate(
    req.params.id,
    {
      categoryName,
      description,
    },
    { new: true }
  );
  res.json({ message: "Categoría actualizada" });
};

export default categoriesController;
