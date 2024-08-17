const router = require('express').Router();
const checkoutController = require('../../controllers/Checkout/CheckoutController');

router.post('/',checkoutController.checkoutUser);
router.get('/',checkoutController.getAllCheckout);
// router.delete('/:id',categoryController.deleteCategory);
// router.get('/',categoryController.getAllCategory);
// router.get('/:id',categoryController.getCategoryById);




module.exports=router;