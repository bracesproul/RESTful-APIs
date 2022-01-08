/* eslint-disable */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // code 200 means that the request was successful and the server has sent the response
    res.status(200).json({
        message: "orders were fetched"
    });
});

router.post('/', (req, res, next) => {
    // code 201 means that the request was successful and a new resource was created
    res.status(201).json({
        message: "order was created"
    });
})

// using ":" we can pass an id to the route, a dynamic parameter
router.get('/:orderId', (req, res, next) => {
    // variable below takes the value of the id from the url praameter
    const orderId = req.params.orderId;
    res.status(200).json({
        message: "order details",
        orderId: `orderId ${orderId}`
    });
})

router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(201).json({
        message: "order deleted",
        orderId: `orderId ${orderId}`
    });
})

module.exports = router;