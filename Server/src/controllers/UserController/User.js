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
            res.status(201).json({message:"Đăng ký thành công" , userReg});
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
    },
    getUserInfo: async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.userId;
            // Tìm người dùng trong cơ sở dữ liệu
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            // Hiển thị tên người dùng
            res.status(200).json(user);

        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
            res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình lấy thông tin người dùng' });
        }
    },
    getAllUser: async (req,res)=>{
        try {
           const AllUser = await User.find()
           res.status(200).json(AllUser)
        } catch (error) {
         res.status(500).json({message:error.message});
        }
    }
}


module.exports = UsersController;
