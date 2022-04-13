const router = require('express').Router();
const User = require('../model/user');
const { regesterValidation, loginValidation } = require('../validation');
// const bcrypt = require('bcrypt');
//const { valid } = require('@hapi/joi');

router.post('/register', async (req, res)=>{

    console.log(req.body)
    // ---- validate data ----
    const validation = regesterValidation(req.body);
    if(validation.error){
        res.status(400).send(validation.error.details[0].message);
        return;
    }

    // ----- checking if user is already there -----
    const emailExist = await User.findOne({email: req.body.registerEmail});
    if(emailExist) return res.status(400).send('email already exists!!!');

    // // ----- Hash passwords -----
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.registerPassword, salt);


    // ----- Create a new user -----
   
    const user = new User({
        name: req.body.registerName,
        email: req.body.registerEmail,
        password: req.body.registerPassword,
    });
    try {
        const savedUser = await user.save();
        res.send({ savedUser}); 
    } catch (err) {
        res.status(400).send(err);
    }

    

})
// ---- Login user ---- 
    
router.post('/login',async(req, res)=>{
        
    // ----- checking if the email exists -----
    console.log(req.body)
    const user = await User.findOne({
        email: req.body.loginEmail,
        password: req.body.loginPassword
    });
    if(!user) return res.status(400).send('Invalid Email or password');
    // // ----- password is correct -----
    // const validPass = await bcrypt(req.body.loginPassword, user.password);
    // if(!validPass) return res.status(400).send('Invalid Email or password');
    console.log(user);
    res.send('logged in...');
// }   

})

module.exports = router;