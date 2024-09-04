// create app
const express = require('express');
const app = express();

//find port 
require('dotenv').config();
port = process.env.port || 3000;


//add middleware
app.use(express.json());
const fileUplod = require('express-fileupload');
app.use(fileUplod());

//connect with DB
const dataBase = require('./config/database');
dataBase.connectDb();


//connect to cloudinary
const cloudDataBase = require('./config/cloudinary');
cloudDataBase.connectCloudinary();

// mount api route
const userRoute = require('./routes/fileupload');
app.use('/api/v1/upload', userRoute);

//activate server 
app.listen(port ,() => {
    console.log(`server started at ${port} successfully`);
})