const mongoose=require('mongoose')

const Userschema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
module.exports= mongoose.model('User',Userschema);
