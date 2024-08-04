const Product = require('../../../model/User/ModelProducts');
const Category = require('../../../model/User/ModelCategories');

const ProductsController = {
    addProducts: async (req, res) => {
        try {
            const { name, origin, image, storage, expirydate, categories, price, description } = req.body;
    
            if (!categories) {
                return res.status(400).json({ error: "categories are required" });
            }

            const newProduct = new Product({
                name, 
                origin, 
                image,
                storage, 
                expirydate,
                categories,
                price,
                description
            });
    
            const savedProduct = await newProduct.save();
    
            const category = await Category.findById(categories);
            if (category) {
                category.Products.push(savedProduct._id);
                await category.save();
            } else {
                console.error("Category not found:", categories);
                return res.status(400).json({ error: "Category not found" });
            }
    
            res.status(201).json(savedProduct);
        } catch (error) {
            console.error("Error adding product:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getProducts: async (req, res) => {
        try {
            const getAllProducts = await Product.find();
            res.status(200).json(getAllProducts);
        } catch (error) {
            console.error("Error getting all Products:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getProductsId: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            console.error("Error getting Product:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    deleteProducts: async (req, res) => {
        try {
            const {id} = req.params
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
                return res.status(404).json({ error: 'Product not found' });
            }
            
            await Category.updateOne(
                { _id: deletedProduct.categories },
                { $pull: { Products: deletedProduct._id } }
            );
    
    
            res.status(200).json("Successfully deleted");
        } catch (error) {
            console.error("Error deleting product:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updateProducts: async (req, res) => {
        try {
            const Productid = req.params.id;
            const {name, origin, image, storage, expirydate, categories, price, description } = req.body;
            const updateProducts = await Product.findByIdAndUpdate(
                Productid,
                {name, origin, image, storage, expirydate, categories, price, description  },
                { new: true }
                
            );
            if (categories) {
                await Category.updateMany(
                    { products: productId },
                    { $pull: { products: productId } }
                );
    
                await Category.updateOne(
                    { _id: categories },
                    { $addToSet: { products: productId } }
                );
            }

            res.status(200).json({ success: true, message: 'Product updated successfully', updateProducts });
        } catch (error) {
            console.error("Error updating Product:", error);
            res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
        }
    }
};

module.exports = ProductsController;