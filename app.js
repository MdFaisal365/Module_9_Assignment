const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const mysql = require('mysql');
const jsonWebToken = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const express_mongo_sanitize = require('express-mongo-sanitize');
const {rateLimit} = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = express();



const userRoutes = require('./src/Routes/api');
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7',
	legacyHeaders: false,
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(hpp());
app.use(helmet());
app.use(limiter);
app.use(express_mongo_sanitize());

app.use(userRoutes);
// this route is for home page:
app.get('/', (req, res)=>{
    res.status(200).send(`<h1 style="text-align: center; background-color: lightBlue;">Home page</h1>`);
})


app.use('*', (req, res)=>{
    res.status(404).send('<h1>Not Found!</h1>');
})

module.exports = app;
