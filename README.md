## Simple Shopping Cart
---
This simple shopping cart is designed to demonstrate templating in EJS, CRUD operations using postgresql and the promise library pg-promise. 

## Installation
_download from Here_ 

```
git clone 
cd && npm init && nodemon
```
### OR
* run through [codepen](www.codepen.com)

### Requirements
To run the demo on codepen, you don't need anything except a modern browser 

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
1. express 
2. morgan
3. path
4. body-parser or muter
5. method-override
6. pg-promise
7. nodemon
8. stripe 


## Credits (code snippets and refereces)
---
[]()
[]()
[]()
[]()
[]()
[]()

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
