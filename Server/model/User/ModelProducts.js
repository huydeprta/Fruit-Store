const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    NameFruit: {
        type: String,
        required: true
    },
    imgFruit: {
        type: String,
        required: true
    },
    descriptionFruit: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    supplier: [{
        name: {
            type: String,
            required: true
        },
        supplierId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Supplier'
        }
    }],
    origin: {
        type: String,
        required: true
    },
    categories: [{
        name: {
            type: String,
            required: true
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
