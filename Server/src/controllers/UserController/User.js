const User = require('../../model/User/UserModel')
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const Users = {
     register: async (req,res)=>{
          try {
               const {username,email,password} = req.body
               if(!req.body.username || !req.body.email || !req.body.password){
                    return res.status(400).json({message:"Nhập cho đầy đủ"})
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
               password:hashedPassword
            })
            const userReg = await newUser.save()
            res.status(201).json(userReg)
          
               
          } catch (error) {
               res.status(500).json({message:error})
          }
     }

}
module.exports = Users