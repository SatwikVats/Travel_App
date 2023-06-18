const express = require('express');
const router = express.Router();
//const Wishlist = require('../model/wishlist.model');

const verifyUser = require('../middleware/verifyuser');
const createWishlistHandler = require('../controllers/createWishlistController');
const deleteWishlistHandler = require('../controllers/deleteWishlistController');
const getWishlistHandler = require('../controllers/getWishlistController');
//const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = require('../controllers/wishlistController');

router.route("/").post(verifyUser, createWishlistHandler);

//During delete requests, we have to pass the parameter in the API as well.
router.route("/:id").delete(verifyUser, deleteWishlistHandler);

router.route("/").get(verifyUser, getWishlistHandler);

module.exports = router;