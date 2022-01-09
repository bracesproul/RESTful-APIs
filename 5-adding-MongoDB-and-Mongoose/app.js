/* eslint-disable */

// NPM package: https://www.npmjs.com/package/express
const express = require('express');
// NPM package: https://www.npmjs.com/package/morgan
const morgan = require('morgan');
// NPM package: https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
// NPM package: https://www.npmjs.com/package//mongoose
const mongoose = require('mongoose');
// NPM package: https://www.npmjs.com/package/dotenv
// Refer to 5-adding-MongoDB-and-Mongoose in the README.md file for more information
const dotenv = require('dotenv');

const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
dotenv.config();
const mongoDbUrl = `<add mongoDB uri link>${process.env.MONGODB_ATLAS_PASSWORD}<add mongoDB uri link>`;

mongoose.connect(mongoDbUrl);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    };
    next();
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;