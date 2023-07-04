const express = require('express');
const bodyParser = require('body-parser');

const app = express();

console.log(encodeURIComponent("Canada"));

//? WE USED THE FOLLOWING PACKAGES:
//* nodejs      : runtime environment.
//* express     : middleware framework.
//* body-parser : middleware to parse the body of the request.
//* ejs         : (template || view) engine.

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const fname = req.body.firstName || 'Unknown';
  const lname = req.body.lastName || 'User';
  const user = `${fname} ${lname}`;

  res.render('index', { user: user });

  
//   res.send(`
//   <h1>Hello from Express!</h1>
//   <h2>Hi ${user}!</h2>
//   <form method="POST" action="/"> 
//     <label for="fname">First name:</label><br>
//     <input type="text" id="fname" name="firstName" required ><br>
  
//     <label for="lname">Last name:</label><br>
//     <input type="text" id="lname" name="lastName" required ><br><br>
  
//     <input type="submit" value="Submit">
// </form>`);

});

app.listen(3000, () => console.log('Server is up!'));

