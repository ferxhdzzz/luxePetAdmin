/*
    DataBase:
    categoryName
    description
*/

import { Schema, model } from "mongoose";

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            require: true
        },

        description: {
            type: String,
            require: true
        }
    }
);

export default model("Category", categorySchema);
