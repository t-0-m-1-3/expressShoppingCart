/*
 * products.sql
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


\c shoppingcart
INSERT INTO products ( name, price, quantity) VALUES
  (
    'prodName',
    5.99,
    8
  ),
  
  (
    'prodName2',
    9.99,
    3
    
  );

-- vim:et
