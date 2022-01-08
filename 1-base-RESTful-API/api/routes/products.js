/* eslint-disable */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // code 200 means that the request was successful and the server has sent the response
    res.status(200).json({
        message: "Handling GET requests to /products"
    });
})

router.post('/', (req, res, next) => {
    // code 201 means that the request was successful and a new resource was created
    res.status(201).json({
        message: "Handling POST requests to /products"
    });
})  

// using ":" we can pass an id to the route, a dynamic parameter
router.get('/:productId', (req, res, next) => {
    // variable below takes the value of the id from the url praameter
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: "You discovered the special ID"
        });
    } else {
        res.status(200).json({
            message: 'You passed an id'
        })
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "updated product"
    })
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "deleted product"
    })
});

module.exports = router;