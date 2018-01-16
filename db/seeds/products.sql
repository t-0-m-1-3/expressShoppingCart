/*
 * products.sql
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */


/* \c shoppingcart */
INSERT INTO products ( name, price, quantity, prodImg) VALUES
  (
    'customPI',
    5.99,
    8,
   'https://www.dropbox.com/s/q1uojl4pkljyefv/customPI.jpg?dl=0'  ),
  
  (
    'nintenPI',
    9.99,
    3,
'https://www.dropbox.com/s/ppaupqw617hfzjx/nintenPI.jpg?dl=0'
    
  );

-- vim:et
