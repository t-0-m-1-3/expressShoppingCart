/*
 * orders.sql
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


\c shoppingcart
INSERT INTO orders (u_id, productId, quantity) VALUES
  (
    '1',
    '1',
    '8'
  ),
  
  (
    '2',
    '2',
    '10'
  );

-- vim:et

