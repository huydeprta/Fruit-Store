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
            const getAllProducts = await Product.find()
            .populate('categories' , 'name')
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
    
    
            await Product.findByIdAndDelete(id);
    
            res.status(200).json({ message: 'Sản phẩm đã được xóa thành công' });
        } catch (error) {
            console.error("Error deleting product:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updateProducts: async (req, res) => {
        try {
            const Productid = req.params.id;
            const { name, origin, image, storage, expirydate, categories, price, description } = req.body;
    
            // Tìm sản phẩm để lấy danh sách ảnh hiện tại
            const product = await Product.findById(Productid);
            if (!product) {
                return res.status(404).json({ success: false, message: 'Không tìm thấy sản phẩm' });
            }
    
            // Nếu có ảnh mới, thêm vào mảng ảnh hiện tại
            let updatedImages = product.image;
            if (image) {
                updatedImages.push(image);
            }
    
            const updateProducts = await Product.findByIdAndUpdate(
                Productid,
                {
                    name,
                    origin,
                    image: updatedImages, // Cập nhật mảng ảnh
                    storage,
                    expirydate,
                    categories,
                    price,
                    description
                },
                { new: true }
            );
    
            if (!updateProducts) {
                await Category.updateMany(
                    { products: Productid },
                    { $pull: { products: Productid } }
                );
    
                await Category.updateOne(
                    { _id: categories },
                    { $addToSet: { products: Productid } }
                );
            }
    
            res.status(200).json({ success: true, message: 'Cập nhập thành công', updateProducts });
            
        } catch (error) {
            res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
        }
    }
    
};

module.exports = ProductsController;