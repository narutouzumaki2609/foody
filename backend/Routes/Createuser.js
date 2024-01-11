const app=require('express')
const router=app.Router();
const User=require('../models/User')

const { query, validationResult } = require('express-validator');


router.post('/createUser',async (req,res)=>{
    try{
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location: req.body.location
        }).then(res.json({success:true}))
        
    }
    catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports= router;