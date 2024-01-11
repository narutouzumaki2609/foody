const app=require('express')
const router=app.Router();

router.post('/Display',(req,res)=>{
    try{
        res.send([global.food_items,global.food_category])
        console.log(global.food_category)
    }
    catch{
        console.error(error.message);
        res.send("Server error")
    }
})
module.exports= router;