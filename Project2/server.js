/*
 * server.js
 * Copyright (C) 2017 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
 const express = require('express');
 const logger = require('morgan');
 const path = require('path');
 const bodyParser = require('body-parser');
 const methodOverride = require('method-override');
 const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
// app.use(express.static('','public'));

// app.set('views', path.join(__dirname, views));
// app.set('view-engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Starting SkyNe on Port: ${PORT}`);
  // console.log(`Listening on Port: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hey We\'re Live')
  // res.render('/views/index', {
  // message: 'Success',
  // currentPage: 'home',
  // documentTitle: 'A Store Shopping Cart',
  // subTitle: 'Thanks for trusting your gift giving with us!'
// });
});

// const cartRoutes = require('./routes/cart-routes');
// app.use('./cart', cartRoutes);

app.get('*', (req, res) => {
  res.status(404).send('not found');
       });
