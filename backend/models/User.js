const mongoose=require('mongoose')

const Userschema= new mongoose.Schema({
    Username:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }

})
module.exports= mongoose.model('User',Userschema);
