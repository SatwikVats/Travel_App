const express = require('express');
const { request } = require('http');

const router = express.Router();
//const hotels = require('../data/hotels'); 
const Hotel = require('../model/hotel.model');

router.route("/").get(async (req, res) => {
    const hotelCategory = req.query.category;     //To filter hotels by category.
    try{
        let hotels;
        if(hotelCategory){
            hotels = await Hotel.find({category: hotelCategory});
        }
        else{
            hotels = await Hotel.find({});
        }
        hotels? res.json(hotels) : res.status(404).json({message: "Data not found."});
    }
    catch(err){
        console.log(err);
    }
    //res.json(hotels.data);  //As per this, we are just getting the data stored locally.
})

module.exports = router;