/*
 * orders.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


const express = require('express');
const ordersRouter = express.Router();
const ordersController = require('../controllers/orders-controller');


//root route
ordersRouter.get('/', (req, res ) => {
      res.status(200).json({
          message: 'handling get requests to /orders'});
});

//post
ordersRouter.post('/', (req, res ) => {
    const orders = {
          productid: req.body.productid,
          quantity: req.body.quantity
    };
      res.status(201).json({
          message: 'handling post requests to /orders',
          order: order 
      });
});

ordersRouter.get('/:orderid', (req, res ) => {
      res.status(200).json({
          message: 'order details to /:orderid',
          orderid: req.params.orderid

});
});

ordersRouter.delete('/:orderid', (req, res ) => {
      res.status(200).json({
          message: 'order deleted /:orderid',
          orderid: req.params.orderid
});
});


module.exports = ordersRouter;
