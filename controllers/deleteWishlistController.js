const Wishlist = require('../model/wishlist.model');

const deleteWishlistHandler = async (req, res) => {
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({message: "Hotel deleted from wishlist."});
    }
    catch(err){
        res.status(500).json({message: "Could not delete hotel from wishlist."});
    }
}

module.exports = deleteWishlistHandler;