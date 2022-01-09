/* eslint-disable */

// NPM package: https://www.npmjs.com/package/express
const express = require('express');
const app = express();

// NPM package: https://www.npmjs.com/package/morgan
const morgan = require('morgan');

// NPM package: https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
// set url encoded to false to only support simple body url encoded data
// true would allow us to parse extended bodys with rich data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// CORS support
// The "*" is where we can add the domain that we want to allow access to our API
// The "*" means all domains
app.use((req, res, next) => {
    // Add restrictions to the headers to make security changes on who has access to your RESTful API
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    // the browser will always send an option request first when sending a PUT/POST/PATCH/DELETE/GET request
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