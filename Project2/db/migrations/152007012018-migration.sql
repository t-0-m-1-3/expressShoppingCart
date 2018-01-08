/*
 * 152007012018-migration.sql
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


\c shoppingcart

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY NOT NULL, 
    productId VARCHAR(255), 
    quantity INT);


CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY NOT NULL, 
   name VARCHAR(255), 
    price INT,
    quantity INT
    );



-- vim:et

