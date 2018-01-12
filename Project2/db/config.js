const options = {
  receive: (data, result, e) => {
    console.log("this is from receive: ", e.query)
  },
  query: (e) => {
    console.log("this is e.query:", e.query)
  }
};

// higher level functions
const pgp = require('pg-promise')(options)
const PW = process.env.password;
function setDatabase() {
  if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database:'shoppingcart',
      port:5432,
      host:'localhost',
      password: PW
    });
  } else if (process.env.NODE_ENV === 'production') {
      return pgp(process.env.DATABASE_URL)
  }
}

const db = setDatabase()

module.exports = db

