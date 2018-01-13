/*
 * orders-controller.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const Order = require('../models/order');
const ordersController = {};
//
//index root route
ordersController.index = (req,res) => {
      Order.findAll()
           .then(orders => {
           console.log('inside index controller vars next: ', req.params, orders)
           res.render('index', {
           // keyPublishable: keyPublishable,
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

ordersController.update = (req,res) => {
  console.log(req.params)
  console.log('about to go into Order.update() ')
      Order.update({
        productid: req.body.productid,
        u_id: req.body.u_id,
        quantity: req.body.quantity },
                  req.params.id)
          .then(() => {
            res.redirect(`orders/${req.params.id}`)
.catch(err => {
  res.status(400).json(err)})
          })};
          
//.create()
ordersController.create = (req,res) => {
  console.log('hitting controller Create');
  console.log(req.body);
  console.log("\n");
      Order.create({
        u_id: req.body.u_id,
        productid: req.body.productid,
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
            console.log('you just deleted order: ' + req.params.id)
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
