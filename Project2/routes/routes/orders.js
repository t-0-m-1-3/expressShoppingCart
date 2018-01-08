/*
 * orders.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


const express = require('express');
const router = express.Router();

//root route
router.get('/', (req, res, next) => {
      res.status(200).json({
          message: 'Handling Get Requests to /orders'});
});

//post
router.post('/', (req, res, next) => {
    const order = {
          productId: req.body.productId,
          quantity: req.body.quantity
    };
      res.status(201).json({
          message: 'Handling POST Requests to /orders',
          order: order 
      });
});

router.get('/:orderId', (req, res, next) => {
      res.status(200).json({
          message: 'Order details to /:orderId',
          orderId: req.params.orderId

});
});

router.delete('/:orderId', (req, res, next) => {
      res.status(200).json({
          message: 'Order deleted /:orderId',
          orderId: req.params.orderId
});
});


module.exports = router;

