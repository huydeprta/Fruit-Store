const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    profileImage: String,
   
})
const User = mongoose.model('User', UserSchema);
module.exports = User