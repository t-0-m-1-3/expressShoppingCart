/*
 * products-controller.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
const Product = require('../models/products');
const productsController = {};

//findAll()
productsController.index = (req,res_ => {
      Product.findAll()
           .then(products => {
           res.render('products/index', {
           message: 'ok',
           products: products})
           })
})
};
//.show()
productsController.show = (req,res) => {
      Product.findById(req.params.id_)
            .then(products => {
            res.render('products/show',{
            product: products
            })
          }).catch(err => {
          res.status(400).json(err)
          })
};
//.edit()
productsController.edit = (req,res) => {
      Product.findById(req.params.id)
           .then(products => {
           res.render('products/edit', {
           products: products
           })
           }).catch(err => {
           res.status(400).json(err)})
};
//.update()
productsController.update = (req,res) => {
      Product.update({
        productId: req.body.productId,
        quantity: req.body.quantity },
                  req.params.id)
          .then(() => {
            res.redirect(`products/${req.params.id}`)})
}.catch(err => {
  res.status(400).json(err)})
};
//.new()
productsControllerj.create = (req,res) => {
  res.render('products/new')
};
//.create()
productsController.create = (req,res) => {
      Product.create({
        productId: req.body.productId,
        quantity: req.body.quantity
        })
          .then(products => {
          res.redirect(`/products/${products.id}`)
          .catch(err => {
          res.status(400).json(err);
          });
};
//.destroy()
productsController.destroy = (req,res) => {
      Products.destroy(req.params.id)
            .then(() => {
            res.redirect('.products')
            })
            .catch(err => {
            res.status(400).json(err);
            });
};

module.exports = productsController;

