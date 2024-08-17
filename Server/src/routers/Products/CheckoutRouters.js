const router = require('express').Router();
const checkoutController = require('../../controllers/Checkout/CheckoutController');

router.post('/',checkoutController.checkoutUser);
// router.put('/:id',categoryController.updateCategory);
// router.delete('/:id',categoryController.deleteCategory);
// router.get('/',categoryController.getAllCategory);
// router.get('/:id',categoryController.getCategoryById);




module.exports=router;