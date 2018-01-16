## Simple Shopping Cart
---
This simple shopping cart is designed to demonstrate templating in EJS, CRUD operations using postgresql and the promise library pg-promise. 

## Installation
_download from Here_ 

```
git clone https://github.com/t-0-m-1-3/expressShoppingCart.git 
cd && npm init && nodemon
```
### Requirements

To run the repository locally you'll need to clone the repo and have `node` and `npm` installed.


## How it Works (user stories and wireframes)
A User will select the products they want and move to the orders page.
From there they will checkout and the stripe API test will run. 

### wireframes. 
---

[the first one](https://www.dropbox.com/s/gbtw3l4eml56up0/20180105_141848.jpg?dl=0)

[ERdiagram](https://www.dropbox.com/s/785jp63482zks92/ERdiagram.md?dl=0)

[routeDiagram](https://www.dropbox.com/s/zsn7cp1qa4y7kua/routeDiagram.md?dl=0)

[wireframe2](https://www.dropbox.com/s/k8h7mommz4bdypx/20180105_141851.jpg?dl=0)

[wireframe3](https://www.dropbox.com/s/2p5gtit3dxnfoes/20180105_165301.jpg?dl=0)

[wireframe4](https://www.dropbox.com/s/c0bcelxb8aszvg3/20180105_165304.jpg?dl=0)

[wireframe5](https://www.dropbox.com/s/rzx0tkmkz0wqfnt/20180105_165307.jpg?dl=0)

[wireframe6](https://www.dropbox.com/s/ycn4m8k2rrorkf5/20180105_165317.jpg?dl=0)

[wireframes7](https://www.dropbox.com/s/nxb58uy8hjqyhsw/20180108_095902.jpg?dl=0)

## Helper Functions

| Function | Description | 
| --- | :---: |  
| `app.get('/')` | Will handle grabbing the root and render the index view | 
| `app.get('*')`| Will handle the error routes and render a 404 | 
| `Order.findAll()` | This will reach out and GET all the orders | 
| `Order.findById()` | This will reach out and query for a single order | 
| `Order.update` | Will perform a PATCH on an order | 
| `Order.create()` | This will CREATE an order in the db | 
| `Order.destroy()` | This will DELETE and order | 
| `Product.findAll()` | This will reach out and GET all the orders | 
| `Product.findById()` | This will reach out and query for a single order | 
| `Product.update` | Will perform a PATCH on an order | 
| `Product.create()` | This will CREATE an order in the db | 
| `Product.destroy()` | This will DELETE and order |  
| `Stripe.customer.create()` | Will CREATE the customer and charge the CC using the `stripe` package in `npm` | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
1. express: runs the server under an MVC model 
2. morgan: logger to help with debugging
3. path; for interacting with filesystem.
4. body-parser; for maniupulating form datr
5. method-override; for allowing forms to override their default behavior
6. pg-promise: promise library for handling async database requrests in
   psql
7. nodemon; used for automatically restarting the server after a file changes. 
8. stripe: used for checkout button and credit card transactions.
9. dotenv: used to interact with the `.env` file.
10. EJS: tempalting engine used for rendering the html views.
11. ejs-lint: increased the logs ability to track down syntax errors.

## Credits (code snippets and refereces)
---
### Credits
---
I need to thank both the `#heroku` and `#stripe` *IRC* channels for
   their support. 

[ stripe documentation](https://stripe.com/docs/checkout/express)
[mozilla express tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
[w3Schools RWD](https://www.w3schools.com/css/css_rwd_viewport.asp)
[css media query
examples](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
[node and heroku deploy](https://www.youtube.com/watch?v=QT3_zT97_1g&t=76s)
[buidling a simple CRUD app](https://zellwk.com/blog/crud-express-mongodb/)
[ pg-promise password auth ](https://github.com/strongloop/loopback-connector-postgresql/issues/138)
[express working with
forms](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms)
[dan dumitrache's nodejs
sections](http://dan.saigon.ro/category/node-js/)
[stack overflow sending patch and delete with
a form](https://stackoverflow.com/questions/38112722/nodejs-how-to-use-html-form-to-send-patch-delete-request)
[pagination
articles](https://evdokimovm.github.io/javascript/nodejs/mongodb/pagination/expressjs/ejs/bootstrap/2017/08/20/create-pagination-with-nodejs-mongodb-express-and-ejs-step-by-step-from-scratch.html)
[how to use ejs-lint on the command
line](https://stackoverflow.com/questions/48140310/how-to-use-ejs-lint-in-cli)
[stripe type error
create](https://github.com/airbnb/react-dates/issues/845)
[heroku package.json not
detected](https://github.com/heroku/heroku-buildpack-nodejs/issues/11)
[heroku get
error](https://github.com/parse-community/parse-server/issues/1589)


### Snippets
---

``` 


```

---

```

```
---


## Contributing
If you'd like to contribute to the repository, first `clone` the repo
and perform a pull request. 
 
### Future Release
I plane to flush out more on the PostMVP branch. I want to add uploads
for products and add email contact automation. 

## Tests
---
The test for the `stripe` api is 
>4242 4242 4242 4242
