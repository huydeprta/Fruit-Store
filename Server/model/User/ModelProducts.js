const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    origin: {
        type: String,
        required: true
    },
    categories: {
       type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
    }
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
