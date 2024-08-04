const Category = require('../../../model/User/ModelCategories');


const categoryController = {
    addCategory: async (req, res) => {
        try {
            const { name } = req.body;
            const newCategory = new Category({ name });
            await newCategory.save();
            res.status(201).json({ message: 'Danh mục đã được tạo thành công', category: newCategory });
        } catch (error) {
            console.error('Lỗi khi thêm danh mục:', error);
            res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình tạo danh mục' });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const {id} = req.params;
            const { name } = req.body;
            const updatedCategory = await Category.findByIdAndUpdate(
                  id,
                { name },
                { new: true }
            );
            if (!updatedCategory) {
                return { success: false, message: 'Không tìm thấy danh mục' };
            }
            res.status(200).json({ message: 'Danh mục đã sửa tạo thành công',updatedCategory})
        } catch (error) {
            res.status(500).json({ message: "Lỗi server" })
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            
            const category = await Category.findById(id);
            
            if (!category) {
                return res.status(404).json({ message: 'Không tìm thấy danh mục để xóa' });
            }
    
            if (category.Products.length > 0) {
                return res.status(400).json({ error: 'Danh mục không thể xóa vì có chứa sản phẩm' });
            }
    
            await Category.findByIdAndDelete(id);
    
            res.status(200).json({ message: 'Danh mục đã được xóa thành công' });
        } catch (error) {
            console.error('Lỗi khi xóa danh mục:', error);
            res.status(500).json({ error: 'Đã xảy ra lỗi trong quá trình xóa danh mục' });
        }
    },
    getAllCategory: async (req, res) => {
        try {
            const allCategories = await Category.find();
            res.status(200).json(allCategories);
        } catch (error) {
            console.error('Error fetching categories:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getCategoryById: async (req, res) => {
        try {
            const idCategory = req.params.id;
            const findCategoryById = await Category.findById(idCategory);
            if (!findCategoryById) {
                return res.status(404).json({ message: "Không tìm thấy danh mục" })
            }
            res.status(200).json(findCategoryById);
        } catch (error) {
            res.status(500).json({ message: "Lỗi server" })
        }
    }

};
module.exports = categoryController;