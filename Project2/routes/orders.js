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
ordersRouter.get('/', ordersController.index);
// ordersRouter.get('/ordersHistory', ordersController.history)
ordersRouter.post('/charge', ordersController.charge);
ordersRouter.get('/:id', ordersController.show);
ordersRouter.patch('/edit/:id', ordersController.update);
ordersRouter.post('/new', ordersController.create);
ordersRouter.delete('/:id', ordersController.destroy);


module.exports = ordersRouter;
