const express = require('express');
const router = express.Router();


const signupHandler = require('../controllers/signupControllers');
const loginHandler = require('../controllers/loginController');


router.route('/register').post(signupHandler);

router.route('/login').post(loginHandler);

module.exports = router;