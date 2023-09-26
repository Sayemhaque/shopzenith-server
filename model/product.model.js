const mongoose = require('mongoose');

// Define a schema for your product
const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Use the default ObjectId as _id
  sales: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
});

// Create a model based on the schema
const Product = mongoose.model('Products', productSchema);

module.exports = Product;
