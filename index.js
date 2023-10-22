const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000; // You can change this to any port you prefer
const connectToDB = require("./db/db")
const Product = require("./model/product.model")



//middlewares
app.use(express.json())
app.use(cors())

// database connection
connectToDB()


//get ALL products
const getAllProducts = require("./routes/productsRoute")
app.use("/" , getAllProducts)


// post a new product
const addAProduct = require("./routes/productsRoute")
app.use("/", addAProduct)


//get single product
const getSingleProducts = require("./routes/productsRoute")
app.use("/",getSingleProducts)


//get products by category
const getProuductsByCategory = require("./routes/productsRoute")
app.use("/", getProuductsByCategory)


//get categories
const getCategories = require("./routes/productsRoute")
app.use("/", getCategories)


// get feature products
const getFeatureProducts = require("./routes/productsRoute")
app.use("/", getFeatureProducts)


//get trending products
const getTrendingProducts = require("./routes/productsRoute")
app.use("/", getTrendingProducts)

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

