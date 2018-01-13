# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Fri| Game Idea, Wireframes and Priority Matrix|
|Day 2: Mon| Pseudocode\Actual code\Basic Clickable Model|
|Day 3: Tue| Working Prototype |
|Day 4: Wed| App Completed / Slides |
|Day 5: Thur| Project Presentations |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I plan to build a simple shopping cart that can be generalized to any
small business. I want to start with a simple products page that'll push
selected products into a cart on an orders page. 
I plane to use the stripe API to simulate confirming purchases. 
I have been looking at shopping cart tools and have been testing some
with `npm` but haven't found anything satisfactory yet 

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  
![Priority Matrix](https://www.dropbox.com/s/1tz8d9lni9b5qm8/Screenshot_SmartSelect_2018-01-08-15-09-22.jpg?dl=0)

## MVP 

Include the full list of features that will be part of your MVP 
1. products page listing 2-3 products that can be sent to a cart
2. cart page that allows the user to confirm the purchase,
   CRUD the order inside the databse.
3. orders will be stored inside a postgres db 
4. Stripe API for purchases, PayPal as a backup, GooGle distance matrix
   as another backup
5. EJS templates for the pages, with rendered footer, header

## POST MVP
1. larger array of products
2. user can add products and pictures (like a yardsale site)
3. AUTH, USERS table, ADMIN page with editing features, MarketBasket.sq,
   Suggestions.ejs 

## Wireframes

Include images of your wireframes. 
[the first one](https://www.dropbox.com/s/gbtw3l4eml56up0/20180105_141848.jpg?dl=0)

[ERdiagram](https://www.dropbox.com/s/785jp63482zks92/ERdiagram.md?dl=0)

[routeDiagram](https://www.dropbox.com/s/zsn7cp1qa4y7kua/routeDiagram.md?dl=0)

[wireframe2](https://www.dropbox.com/s/k8h7mommz4bdypx/20180105_141851.jpg?dl=0)

[wireframe3](https://www.dropbox.com/s/2p5gtit3dxnfoes/20180105_165301.jpg?dl=0)

[wireframe4](https://www.dropbox.com/s/c0bcelxb8aszvg3/20180105_165304.jpg?dl=0)

[wireframe5](https://www.dropbox.com/s/rzx0tkmkz0wqfnt/20180105_165307.jpg?dl=0)

[wireframe6](https://www.dropbox.com/s/ycn4m8k2rrorkf5/20180105_165317.jpg?dl=0)

[wireframes7](https://www.dropbox.com/s/nxb58uy8hjqyhsw/20180108_095902.jpg?dl=0)



## App Components

### Creating Items
 MVP: CREATE an Order containing the products selected

 PostMVP: CREATING new products from user uploads

### Deleting Items
 MVP: DELETING an ORDER

 PostMVP: DELETING a product you've added

### Editing Items
 MVP: PATCHING the ORDER 

 PostMVP: PATCHING the products you've uploaded

 PostMVP: ADMIN can edit orders and products page

### Getting Items
 MVP: GETTING all the products

 MVP: GETTING all the orders

 PostMVP: GETTING all the orders for USER

 PostMVP: GETTING all the products you've added


## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| express layout (MVC)  | H | 10hrs| 9hrs | -hrs |
| `order.js`   | H | 6hrs| 24.5 | --hrs |
| ` products.js`   | H | 6hrs| 1.5 | --hrs |
| `shoppingCart.db`| H | 5hrs| 4hrs | -hrs |
| API: Stripe | H | 4hrs| 1hrs | --hrs |
| CSS Page | M | 6hrs| 3.2hrs | --hrs |
| AUTH  | L | 3hrs| --hrs | --hrs |
| login Page | L | 1hrs| --hrs | --hrs |
| `MarketBasket.sql` | L | 3hrs| --hrs | --hrs |
| productUpload  | L | 4hrs| --hrs | --hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

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

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: order.js:15 'SELECT * FROM orders WHERE id = null' 
<br>
**RESOLUTION**: had to use `parseInt()`  
**ERROR**: order.js:14-23 orders.id in the show/index.ejs were not both
rendering 
<br>
**RESOLUTION**: missing closing )};, missing closing %> 
<br>
**ERROR**: order.js: throw error unhandled error event
<br>
**RESOLUTION**: wrote catch error statement wrong for above error
<br>
**ERROR**: config.js: unhandled promise authentication error in pg-promise
<br>
**RESOLUTION**: need to pass PW
<br>
**ERROR**: ordersRouter.js:14-19 Cannot GET 
<br>
**RESOLUTION**: require the ordersController
<br>
**ERROR**: productId is incrementing and coming through as null for the
CREATE route.
``` 
this is e.query: SELECT * FROM orders join products on 
CAST(orders.productid AS INT) = CAST(products.id AS INT) 
WHERE orders.productid = '27'
GET /orders/27 400 1.579 ms - 2365
hitting controller Create
this is e.query: 
    INSERT INTO orders
    (productId, quantity)
    VALUES (null, '10') RETURNING *

```
 
**RESOLUTION**: Form was referenced under the wrong name. 
<br>
**Error**: CREATE Route not pushing all data to db
<br>
**RESOLUTION**: query references were too ambiguous
<br>
**Error**: `index.ejs` showed product id's while `show.ejs` showed orders id's.

**RESOLUTION**: Controller needed to be updated to reflect .ejs changes 
<br>
**Errorr**: Orders table stuck to left side.

**RESOLUTION**: In Process
<br>
**Error**:
```
GET /orders?quantUpdate=1 200 21.793 ms - 11374
GET /stylesheets/stylesheets.css 304 1.448 ms - -
GET /orders/edit/29?quantUpdate=1 404 1.256 ms - 9
```
**RESOLUTION**: In Process
<br>
**ERROR**:
```
PATCH /orders/edit/21 302 45.930 ms - 31
(node:29554) UnhandledPromiseRejectionWarning: Unhandled promise
rejection (rejection id: 1): TypeError: Cannot read property 'catch' of
undefined
(node:29554) [DEP0018] DeprecationWarning: Unhandled promise rejections
are deprecated. In the future, promise rejections that are not handled
will terminate the Node.js process with a non-zero exit code.
GET /orders/edit/orders/21 404 2.439 ms - 9
```
**RESOLUTION**:In Process
