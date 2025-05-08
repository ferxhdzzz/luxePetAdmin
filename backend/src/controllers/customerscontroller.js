const customersController = {};

import customersModel from "../models/Customers.js";

//get - select

customersController.getCustomers = async (req, res) => {

    const customers = await customersModel.find()
    res.json (customers)
}

//post - agregar
          
customersController.createCustomer = async (req, res) => {
    const {name, lastName, birthday, userName,password,email} = req.body; //req.body = lo que le pedimos al frontend
    const  newcustomer = new customersModel({name, lastName, birthday, userName,password,email});
    await newcustomer.save()
    res.json({message: "customer saved"})
}
 
//delete

customersController.deleteCustomer = async (req, res) => {
await customersModel.findOneAndDelete(req.params.id)
res.json({message: "customer deleted"})
}

// actualizar - post

customersController.updateCustomer = async (req, res) =>{
const {name, lastName, birthday, userName,password,email} = req.body; // solicito los valores
await customersModel.findByIdAndUpdate(req.params.id, {
    name, 
    lastName, 
    birthday, 
    userName,
    password,
    email
}, {new: true});
res.json({message: "customer deleted"})
}

export default customersController;


 