const router = require("express").Router();
const ProductsController = require('../../controllers/Products/ProductsControllers');

router.post("/",ProductsController.addProducts);
router.get("/",ProductsController.getProducts);
router.get("/:id",ProductsController.getProductsId);
router.delete("/:id",ProductsController.deleteProducts);
router.put("/:id",ProductsController.updateProducts);




module.exports = router;