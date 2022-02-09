const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//-----import routes-----
const authRoute = require('./routes/auth');

// ---- config dotenv ----
dotenv.config({path:'./config.env'});

//-----connect to DB-----
mongoose.connect(process.env.DB).then(()=>{
    console.log('connected to db...');
}).catch((err) => console.log('err'));


// ---- middlewares -----
app.use(express.json());

//-----Route middlewares-----
app.use('/user', authRoute);



// ---- listening request -----
const PORT = process.env.PORT;
app.listen(PORT,()=> console.log("server is running at port:"+PORT));