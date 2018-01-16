/*
 * 152007012018-migration.sql
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


/* \c shoppingcart */

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY NOT NULL, 
    productid INT, 
    u_id INT,
    quantity INT);


CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY NOT NULL, 
   name VARCHAR(255), 
    price INT,
    quantity INT,
    prodImg VARCHAR(255)
    );

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY NOT NULL, 
   uName VARCHAR(255), 
   email VARCHAR(255),
   address VARCHAR(255),
   ccNum BIGINT,
   password VARCHAR(255)
 
);

/* CREATE TABLE IF NOT EXISTS cart ( */
/*   id SERIAL PRIMARY KEY NOT NULL, */ 
/*   productId INT, */
/*   u_id INT, */
/*   o_id INT, */
/* ); */

-- vim:et

