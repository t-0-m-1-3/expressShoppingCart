/*
 * orders.sql
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


\c shoppingcart
INSERT INTO orders (productId, quantity) VALUES
  (
    'testProdID',
    '8'
  ),
  
  (
    'testProdID2',
    '10'
  );

-- vim:et

