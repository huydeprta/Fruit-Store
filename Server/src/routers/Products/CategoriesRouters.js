const router = require('express').Router();
const  categoryController = require('../../controllers/Products/CategoriesControllers');

router.post('/',categoryController.addCategory);
router.put('/:id',categoryController.updateCategory);
router.delete('/:id',categoryController.deleteCategory);
router.get('/',categoryController.getAllCategory);
router.get('/:id',categoryController.getCategoryById);




module.exports=router;