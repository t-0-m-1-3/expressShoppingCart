/*
 * server.js
 * Copyright (C) 2017 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
 const keyPublishable = process.env.PUBLISHABLE_KEY;
 const keySecret = process.env.SECRET_KEY;
 const express = require('express');
 const logger = require('morgan');
 const path = require('path');
 const bodyParser = require('body-parser');
 const methodOverride = require('method-override');
 const app = express();
 const env = require('dotenv').config();
// const axios = require('axios');
 const stripe = require("stripe")(keySecret);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Starting SkyNe on Port: ${PORT}`);
  // console.log(`Listening on Port: ${PORT}`);
});
const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);


app.get('/', (req, res) => {
  res.send('Hey We\'re Live')
      res.render('index', {
        message: 'Index page'
   });
});

app.get('*', (req, res) => {
  res.status(404).send('not found');
       });
