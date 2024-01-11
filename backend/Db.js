const mongoose = require('mongoose');


module.exports= async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/FoodyDb',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected");
        

        
    }
    catch(error){
        console.log(error)
    }
}
