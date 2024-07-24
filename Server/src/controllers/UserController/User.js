const User = require('../../../model/User/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const UsersController = {
     Register : async (req, res) => {
        try {
          const { username, email, password } = req.body;
          if (!username || !email || !password) {
              return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin" });
          }
            const checkEmail = await User.findOne({ email });
            if (checkEmail) {
                return res.status(400).json({ message: "Email này đã được đăng ký" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                username,
                email,
                password: hashedPassword
            });

            console.log(newUser);

            const userReg = await newUser.save();
            res.status(201).json(userReg);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message:error.message });
        }
    },

    Login: async (req, res) => {
        const { email, password } = req.body;
        try {
         // CHEK EMAIL
            const user = await User.findOne({email});
            if(!user) {
                return res.status(404).json({message: "Email không tồn tại"})
            }

            // chek pass
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({message: " Mật khẩu không đúng "});
            }
            // tạo jwt
            const token = jwt.sign({userId: user._id, email: user.email }, process.env.JWT_SECRET)
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json(error)
        }
    }
}


module.exports = UsersController;
