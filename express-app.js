const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const app = express();

//? WE USED THE FOLLOWING PACKAGES:
//* nodejs      : runtime environment.
//* express     : middleware framework.
//* body-parser : middleware to parse the body of the request.
//* ejs         : (template || view) engine.

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:9000");
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use(router);

app.listen(3000, () => console.log('Server is up!'));

