const CryptoJS = require('crypto-js');
const User = require('../model/user.model');

const signupHandler = async (req, res)=>{
    try{
        const userObject = {
            username: req.body.username,
            email: req.body.email,
            number: req.body.number,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()  
        };
        const newUser = new User(userObject);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json({message: "Error creating the new user."});
    }
}

module.exports = signupHandler;