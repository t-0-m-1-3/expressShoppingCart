[tutorial](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
use ejs to template your node application
# Outline
## Overview
##### Node setup
##### `Server.js`
##### Setup the EJS partials in the views folder

## File Structure:

---
` views/ `

---
* ` views/partials/`
* ` views/partials/footer.ejs`
* ` views/partials/head.ejs `
* ` views/partials/header.ejs `  

---
* ` views/pages/ `
* ` views/pages/about.ejs `
* ` views/pages/index.ejs `

---
* `package.json`
* `server.js`

---

# Node setup
---
- [ ] use `express-generator` with the ejs flag
- [ ] `npm init && npm install express ejs nodemon`
- [ ] create the server.js 

### `Server.js`
- [ ] require express and init app with express
- [ ] set view engine to ejs
- [ ] use res.redner to load up an ejs view file
- [ ] render the index pages
- [ ] render the about page 
- [ ] listen on the port
- [ ] start the server
- [x] or just use `express-generator`

# Setup the EJS partials in the views folder
- [ ] `head.ejs` needs a title, a link to the css bootstrap (they use
  styling in the ejs, we just link to a css)
- [ ] `header.ejs` can get the navbar, using links and spans. ul and li
  out the pages you plan to have on the navabar
- [ ] `footer.ejs` finish with a short p tag with Copyright tags

## Using the EJS partials
---
- [ ] call each partial with `<% include filename %>`  in the `pages/.ejs` file you need them in.  
- [ ] `about.ejs` and `index.ejs` 
- [ ] [ejs syntax quickie](https://ionicabizau.github.io/ejs-playground/)
- [ ] [ejs homepage npm](https://github.com/mde/ejs)

# Passing Data to Views
---
- [ ] on the `server.js` file you can create a route to go from root and
  render something from `pages/` with the data as an `{something:
something, somethingElse: somethingElse }
- [ ] `<%= variable %>` can be passed into HTML tags using the little
  squiddies
- [ ] looping over data is the same as plugging in
  a `forEach(function(param`)) wrapped in `%>`
- [ ] the subsequent items output by the loop are an unordered list
  containing the list items in `<li><%=
  loop.output %> </li>` 
