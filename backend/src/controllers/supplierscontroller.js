const suppliersController = {};

import suppliersModel from "../models/Suppliers.js";

//get - select

suppliersController.getSuppliers = async (req, res) => {

    const suppliers = await suppliersModel.find()
    res.json (suppliers)
}

//post - agregar
          
suppliersController.createSupplier = async (req, res) => {
    const {name, address, managerName, phone} = req.body; //req.body = lo que le pedimos al frontend
    const  newsupplier = new suppliersModel({name, address, managerName, phone});
    await newsupplier.save()
    res.json({message: "supplier saved"})
}
 
//delete

suppliersController.deleteSuppliers = async (req, res) => {
await customersModel.findOneAndDelete(req.params.id)
res.json({message: "supplier deleted"})
}

// actualizar - post

suppliersController.updateSuppliers = async (req, res) =>{
const {name, address, managerName, phone} = req.body; // solicito los valores
await customersModel.findByIdAndUpdate(req.params.id, {
    name, 
    address,
     managerName, 
     phone
}, {new: true});
res.json({message: "supplier deleted"})
}

export default suppliersController;
