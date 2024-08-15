const Product = require('../../../model/User/ModelProducts');

const searchProductFruit = {
    searchProduct: async (req, res) => {
        try {
            const { keyword } = req.query;
            const results = await Product.find({
                $or: [
                    { name: { $regex: keyword, $options: 'i' } },
                    // { origin: { $regex: keyword, $options: 'i' } },
                ]
            })
            res.json(results);
        } catch (error) {
            res.status(500).json({ message: "Không tìm thấy" })
        }
    }



}
module.exports = searchProductFruit;