/* eslint-disable */
const express = require('express');
const router = express.Router();

// handle GET requests to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "orders were fetched"
    });
});

router.post('/', (req, res, next) => {
    // object for creating a new order
    // new order requires productId and quantity properties
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: "order was created",
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: "order details",
        orderId: `orderId ${orderId}`
    });
});

router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(201).json({
        message: "order deleted",
        orderId: `orderId ${orderId}`
    });
});

module.exports = router;