const User = require('../../model/User/UserModel');
const bcrypt = require('bcrypt');

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
    }
};

module.exports = UsersController;
