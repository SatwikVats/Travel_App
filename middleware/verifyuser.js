const jwt = require('jsonwebtoken');

//Middleware to verify whether the user is logged in or not.
const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) =>{
            if(err) res.status(403).json({message: "Invalid token"});
            req.user = user;
            next();
        })
    }
}

module.exports = verifyUser;