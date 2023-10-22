const express = require("express");
const { getAllProducts, addAProduct, getSingleProduct, getProuductsByCategory, getCategories, getFeatureProducts, getTrendingProducts } = require("../controllers/productsController");
const router = express.Router();




router.get("/api/products", getAllProducts)
router.post("/api/product", addAProduct)
router.get("/api/product/:id", getSingleProduct)
router.get("/api/category/:category", getProuductsByCategory)
router.get("/api/categories", getCategories)
router.get("/api/products/featured", getFeatureProducts)
router.get("/api/products/trending", getTrendingProducts)



module.exports = router;


