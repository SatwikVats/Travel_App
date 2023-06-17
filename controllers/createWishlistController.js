const Wishlist = require('../model/wishlist.model');

const createWishlistHandler = async (req, res) =>{
    try{
        const newWishList = new Wishlist(req.body);
        const savedWishList = await newWishList.save();
        res.status(201).json(savedWishList);
    }
    catch(err){
        res.status(500).json({message:"Failed to create wishlist."});
    }
}

module.exports = createWishlistHandler;