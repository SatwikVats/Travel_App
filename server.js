const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3500;

const hotelRouter = require('./routes/hotel.router');
const connectDB = require('./config/dbconfig');
app.use(express.json());    //Middleware
connectDB();

const hotelDataAddedToDB = require('./routes/dataimport.router');

app.get("/", (req, res) =>{
    res.send("Hello");

})

app.use("/api/hotelData", hotelDataAddedToDB);
app.use("/api/hotels", hotelRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to the DB");
    app.listen(process.env.PORT || PORT, () =>{
        console.log("Server is up and running");
    })
})
