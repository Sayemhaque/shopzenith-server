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
app.get('/api/products', async (req, res) => {
  const products = await Product.find({})
  res.status(200).json(products)
});


//get products by category
app.get('/api/category/:category', async (req, res) => {
  const category = req.params.category;
  console.log(category)
  if(category === "All"){
    const products = await Product.find({})
    res.status(200).json(products)
  }else{
    const products = await Product.find({category})
    res.status(200).json(products)
  }
});

app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Product.distinct('category');
    res.status(200).json(["All",...categories]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get feature products
app.get('/api/products/feature', async (req, res) => {
  const products = await Product.find({})
  const featureProducts =
   products.filter(product => product.sales > 100 && product.sales < 200)
  res.status(200).json(featureProducts)
});


//get trending products
app.get('/api/products/trending', async (req, res) => {
  const products = await Product.find({})
  const trendingProducts =
   products.filter(product => product.sales < 100 && product.sales > 1)
  res.status(200).json(trendingProducts)
});


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

