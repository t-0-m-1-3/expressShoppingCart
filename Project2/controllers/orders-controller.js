/*
 * orders-controller.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
const Order = require('../models/order');
const ordersController = {};

//findAll()
ordersController.index = (req,res) => {
      Order.findAll()
           .then(orders => {
           res.render('index', {
           currentPage: 'index',
           message: 'We value your business and contribution to our ability to impace the community',
           documentTitle: 'a store shopping cart',
           subTitle: 'thanks for trusting your gift giving with us!',
           orders: orders})
           })
.catch(err => {
          res.status(400).json(err)
          })
};

//.show()
ordersController.show = (req,res) => {
  console.log(req.params)
  console.log('about to go into Order.findById() ')
      Order.findById(req.params.id)
            .then(orders => {
            console.log('inside show controller vars next: ', req.params.id, req.params, orders)
            res.render('orders/show',{
             message: 'We value your choice to do business with us and enhance our community',
            currentPage: 'show',
            documentTitle: 'a store shopping cart',
            subTitle: 'thanks for trusting your gift giving with us!',
           orders: orders
            })
          }).catch(err => {
          res.status(400).json(err)
          })
};
//.edit()
ordersController.edit = (req,res) => {
      Order.findById(req.params.id)
         .then(orders => {
           res.render(`orders/edit`, {
             message: 'We value your choice to do business with us and enhance our community',
            currentPage: 'edit',
            documentTitle: 'a store shopping cart',
            subTitle: 'thanks for trusting your gift giving with us!',
            orders: orders
            })
          }).catch(err => {
          res.status(400).json(err)
          })
};
//.update()
ordersController.update = (req,res) => {
      Order.update({
        productId: req.body.productId,
        quantity: req.body.quantity },
                  req.params.id)
          .then(() => {
            res.redirect(`orders/${req.params.id}`)
.catch(err => {
  res.status(400).json(err)})
          })};
//.new()
 ordersController.create = (req,res) => {
    res.render('orders/new')
  };
//.create()
ordersController.create = (req,res) => {
      Order.create({
        productId: req.body.productId,
        quantity: req.body.quantity
        })
          .then(orders => {
            res.redirect(`/orders/${orders.id}`)
          }).catch(err => {
            res.status(400).json(err);
          });
};
//.destroy()
ordersController.destroy = (req,res) => {
      Order.destroy(req.params.id)
            .then(() => {
            res.redirect('/orders')
            })
            .catch(err => {
            res.status(400).json(err);
            });
};
//.charge()
ordersController.charge = (req,res) => {
      let amount = 500;

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render('/charge', {keyPublishable}));
            // })
            // .catch(err => {
            // res.status(400).json(err);
            // });
};


module.exports = ordersController;
