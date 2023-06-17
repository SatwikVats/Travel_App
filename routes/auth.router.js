const express = require('express');
const User = require('../model/user.model');
const router = express.Router();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const signupHandler = require('../controllers/signupControllers');


router.route('/register').post(signupHandler);

router.route('/login').post(async (req, res)=>{
    try{
        const user = await User.findOne({number: req.body.number});
        !user && res.status(401).json({message: "Invalid mobile number"});

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        decodedPassword!==req.body.password && res.status(401).json({message: "Password incorrect!"});

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN);

        //res.json(user);
        //To hide the encrypted password from being displayed on console.
        res.json({...rest, accessToken});
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;