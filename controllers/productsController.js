const Product = require("../model/product.model")



exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.send(error)
    }
}


exports.addAProduct = async (req, res) => {
    try {
        const newProduct = new Product({ ...req.body })
        //save post to db
        await newProduct.save()
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}



exports.getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id
        const products = await Product.findById(id)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



exports.getProuductsByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        if (category === "All") {
            const products = await Product.find({})
            res.status(200).json(products)
        } else {
            const products = await Product.find({ category })
            res.status(200).json(products)
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


  
exports.getCategories = async (req, res) => {
    try {
        const categories = await Product.distinct('category');
        res.status(200).json(["All", ...categories]);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



exports.getFeatureProducts = async (req, res) => {
    try {
        const featureProducts = await Product.aggregate([
            {
                $match: {
                    sales: {
                        $gt: 100, 
                        $lt: 200, 
                    }
                }
            }
        ]);

        res.status(200).json(featureProducts);
    } catch (error) {
        res.send(error)
    }
}
exports.getTrendingProducts = async (req, res) => {
    try {
        const featureProducts = await Product.aggregate([
            {
                $match: {
                    sales: {
                        $gt: 20, 
                        $lt: 100, 
                    }
                }
            }
        ]);

        res.status(200).json(featureProducts);
    } catch (error) {
        res.send(error)
    }
}