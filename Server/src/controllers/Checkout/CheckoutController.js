
const Checkout = require('../../../model/Checkout/ModelCheckout');
const User = require('../../../model/User/UserModel')
const checkoutController = {
checkoutUser: async (req, res) => {
    try {
        const { userId, products,country,address, city , phone, totalPrice, methodPayment , orderNotes } = req.body;
      
        if (!userId || !products || !address || !totalPrice || !methodPayment || !country || !city ||!phone) {
            return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
        }
        const user = await User.findOne({userId})
        if(user){
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }

        const newCheckout = new Checkout({
            userId,
            products,
            totalPrice,
            country,
            address,
            city,
            phone,
            methodPayment,
            orderNotes,
            status:false
        });
        await newCheckout.save();
        res.status(200).json({message:"Đặt hàng thành công",newCheckout});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message:error.message });
    }
},
}
module.exports = checkoutController;