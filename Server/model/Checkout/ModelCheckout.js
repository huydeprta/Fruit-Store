const mongoose = require('mongoose');
const checkoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        
        {
           
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
          
            // dateCheckout: {
            //     type: Date,
            //     default: Date.now
            // }

        }
    ],

    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
 
    country:{
        type: String,
        required: true, 
    },
    city:{
        type: String,
        required: true, 
    },
    address:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    methodPayment: {
        type: String,
        required: true,
    },
    orderNotes:{
        type: String,
        required: true, 
    },
    status: {
        type: Boolean,
        default: false
    },

});

const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = Checkout;