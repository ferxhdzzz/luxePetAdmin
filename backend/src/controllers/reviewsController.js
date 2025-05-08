const reviewsController = {};

import reviewsModel from "../models/Reviews.js";

//get - select

reviewsController.getReviews = async (req, res) => {

    const reviews = await reviewsModel.find()
    res.json (reviews)
}

//post - agregar
          
reviewsController.createReviews = async (req, res) => {
    const {comment, rating, idCustomer} = req.body; //req.body = lo que le pedimos al frontend
    const  newreview = new reviewsModel({comment, rating, idCustomer});
    await newreview.save()
    res.json({message: "review saved"})
}
 
//delete

reviewsController.deleteReviews = async (req, res) => {
await reviewsModel.findOneAndDelete(req.params.id)
res.json({message: "review deleted"})
}

// actualizar - post

reviewsController.updateReviews = async (req, res) =>{
const {comment, rating, idCustomer} = req.body; // solicito los valores
await reviewsModel.findByIdAndUpdate(req.params.id, {
    comment,
     rating, 
     idCustomer
}, {new: true});
res.json({message: "review deleted"})
}

export default reviewsController;