const Wishlist = require('../model/wishlist.model');

const getWishlistHandler = async(req, res)=> {
    try{
        const wishlist = await Wishlist.find({});
        wishlist? res.json(wishlist) : res.json({message: "No items found in the wishlist"});

    }
    catch(err){
        console.log(err);
        res.status(500).json(err);

    }
}

module.exports = getWishlistHandler;