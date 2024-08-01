const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;