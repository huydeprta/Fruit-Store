const mongoose = require('mongoose')

const UserModelSchema = mongoose.Schema(
     
     {
          username:{
               type:String,
               required:true,
            },
     email:{
          type:String,
          required:true,
     },
    
     password:{
        type:String,
        required:true,
     },
   
     status: {
        type: Boolean,
        default: false ,
    },
  
},{
    timestamps: true,
}
)
const UserSchema = mongoose.model('User',UserModelSchema)
module.export = UserSchema