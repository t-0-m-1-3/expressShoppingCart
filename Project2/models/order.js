/*
 * order.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
const db = require('../db/config');

const Order = {};
// query the db for the orders
Order.findAll= () => {
      return db.any('select * from orders join products on CAST(orders.productid AS INT) = CAST(products.id AS INT)');
};
//Query the db for a specific id
Order.findById = (id) => {
  console.log('inside find by id')
      console.log(db);
      return db.one(`SELECT * FROM orders join products on CAST(orders.productid AS INT) = CAST(products.id AS INT)  WHERE orders.productid = $1`, [id])
 };
// query the db and update an order
Order.update = (orders, id) => {
      console.log("this is order: ", orders, id)
      return db.none (
      `
      UPDATE orders SET
      productId = $1,
      quantity = $2
      `,
      [orders.productId, orders.quantity])
};
// query the db and create an order
Order.create = ( orders ) => {
    return db.one(
    `
    INSERT INTO orders
    (productId, quantity)
    VALUES ($1, $2) RETURNING *
    `,
    [orders.productId, orders.quantity]);
};
// query the d\b and remove and order
Order.destroy = ( id ) => {
      return db.none(
      `
      DELETE FROM orders
      WHERE id = $1
      `,[id]);
};

module.exports = Order;
