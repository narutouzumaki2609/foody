const app=require('express')
const router=app.Router();
const User=require('../models/User')

const { body, validationResult } = require('express-validator');

router.post('/createUser', [
    body('Username').notEmpty().withMessage('Username cannot be empty'),
    body('password').notEmpty(),
    body('email').isEmail(),
    body('location').notEmpty()
], async (req, res) => {
    // const  {username,password,email,location}=req.body;
    // console.log(username)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body.email)
    try {
        // console.log(req.query)
        await User.create({
            Username: req.body.Username,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        });

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }

    
});

module.exports=router