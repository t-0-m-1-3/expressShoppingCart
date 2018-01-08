/*
 * products.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
const express = require('express');
const router = express.Router();
//root route
router.get('/', (req, res, next) => {
      res.status(200).json({
          message: 'Handling Get Requests to /products'});
});

//post
router.post('/', (req, res, next) => {
  const products = {
        name: req.body.name,
        price: req.body.price
  }
      res.status(201).json({
          message: 'Handling POST Requests to /products',          
          createdProduct: products
});
});

//get products:Id 
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'easterEgg'){
     res.status(200).json({
         message: 'You found the Easter Egg!',
         id: id 
     });
     }else {
            res.status(200).json({
                message: 'You passed an ID',
                id: id
            });
     } 
});
//
//patch products:Id 
router.patch('/:productId', (req, res, next) => {
            res.status(200).json({
                message: 'Updated product'
            });
});
//
//get products:Id 
router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
            res.status(200).json({
                message: 'You Deleted a product'
            });
});
module.exports = router;
