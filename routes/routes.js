const express = require("express");
const { getAllProducts, addAProduct, getSingleProduct, getProuductsByCategory, getCategories, getFeatureProducts, getTrendingProducts, addToCart } = require("../controllers/productsController");
const { registerUser, login } = require("../controllers/userController");
const router = express.Router();




router.get("/api/products", getAllProducts)
router.post("/api/product", addAProduct)
router.get("/api/product/:id", getSingleProduct)
router.get("/api/category/:category", getProuductsByCategory)
router.get("/api/categories", getCategories)
router.get("/api/products/featured", getFeatureProducts)
router.get("/api/products/trending", getTrendingProducts)
router.post("/api/register", registerUser)
router.post("/api/login", login)
router.post("/api/cart",addToCart) 



module.exports = router;


