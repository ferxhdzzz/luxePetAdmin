import express from "express"
import emloyeesRoutes from "./src/routes/employees.js"
import customersRoutes from "./src/routes/customers.js"
import suppliersRoutes from "./src/routes/suppliers.js"


import cartRoutes from "./src/routes/Cart.js";
import reviewsRoutes from "./src/routes/Reviews.js";

import categoryRoutes from "./src/routes/category.js";
import productsRoutes from "./src/routes/products.js";



const app = express();

app.use(express.json())


app.use("/api/employees",emloyeesRoutes)
app.use("/api/customers",customersRoutes)
app.use("/api/suppliers",suppliersRoutes)


app.use("/api/cart",cartRoutes);
app.use("/api/reviews",reviewsRoutes);

app.use("/api/category", categoryRoutes);
app.use("/api/products", productsRoutes)



export default app;