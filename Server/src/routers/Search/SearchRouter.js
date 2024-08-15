const router = require('express').Router();
const searchController = require('../../controllers/SearchProduct/searchController');

router.get("/",searchController.searchProduct);

module.exports = router;