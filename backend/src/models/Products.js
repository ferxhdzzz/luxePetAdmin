/*
   Products: 
   nameProduct 
   Amount 
   productDescrition 
   price 
   size 
   idSupplier 
   idCategory 
   image
*/


import { Schema, model } from "mongoose";

const ProductsSchema = new Schema(
    {
        nameProduct: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            default: 0 
        },
        productDescription: {
            type: String,
            required: true
        },
        price: {
            type: Number, 
            required: true
        },
        size: {
            type: String,
            required: false 
        },
        idSupplier: {
            type: Schema.Types.ObjectId,
            required: true 
        },
        idCategory: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
            default: ""
        }
    }
);


export default model("Products", ProductsSchema);