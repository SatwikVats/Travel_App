const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3500;

const hotelRouter = require('./routes/hotel.router');
const categoryRouter = require('./routes/category.router');
const singleHotelRouter = require('./routes/singlehotel.router');
const authRouter = require('./routes/auth.router');

const connectDB = require('./config/dbconfig');
app.use(express.json());    //Middleware
connectDB();

const hotelDataAddedToDB = require('./routes/dataimport.router');
const categoryDataAddedToDB = require('./routes/categoryimport.route');

app.get("/", (req, res) =>{
    res.send("Hello");

})

app.use("/api/hotelData", hotelDataAddedToDB);
app.use("/api/categoryData", categoryDataAddedToDB);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);

mongoose.connection.once("open", () => {
    console.log("Connected to the DB");
    app.listen(process.env.PORT || PORT, () =>{
        console.log("Server is up and running");
    })
})
