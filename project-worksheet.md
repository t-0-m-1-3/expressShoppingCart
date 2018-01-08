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

[another one](https://www.dropbox.com/s/k8h7mommz4bdypx/20180105_141851.jpg?dl=0)

[another nother one](https://www.dropbox.com/s/2p5gtit3dxnfoes/20180105_165301.jpg?dl=0)

[yeah well](https://www.dropbox.com/s/c0bcelxb8aszvg3/20180105_165304.jpg?dl=0)

[i took a lot of pictures](https://www.dropbox.com/s/rzx0tkmkz0wqfnt/20180105_165307.jpg?dl=0)

[and none of these are what I need](https://www.dropbox.com/s/ycn4m8k2rrorkf5/20180105_165317.jpg?dl=0)

[the last one](https://www.dropbox.com/s/nxb58uy8hjqyhsw/20180108_095902.jpg?dl=0)


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
| express layout (MVC)  | H | 10hrs| 2hrs | -hrs |
| `order.js/ products.js`   | H | 10hrs| 4hrs | --hrs |
| `shoppingCart.db`| H | 10hrs| 3hrs | -hrs |
| API: Stripe | H | 10hrs| 2hrs | --hrs |
| CSS Page | M | 30hrs| --hrs | --hrs |
| AUTH  | M | 10hrs| --hrs | --hrs |
| login Page | M | 10hrs| --hrs | --hrs |
| `MarketBasket.sql` | L | 10hrs| --hrs | --hrs |
| productUpload  | L | 10hrs| --hrs | --hrs |

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
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

