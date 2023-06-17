const CryptoJS = require('crypto-js');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const loginHandler = async (req, res)=>{
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
}

module.exports = loginHandler;