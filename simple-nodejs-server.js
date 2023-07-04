// write simple http server in nodejs

const http = require("http");
const fs = require("fs");

const httpServer = http.createServer((request, response, err) => {
  if (err) throw err;

  // response.writeHead(200, { "Content-Type": "text/html" });

  const body = [];

  request.on("data", (chunk) => {
    console.log(`Data chunk available: ${chunk}`);
    body.push(chunk);
  });

  request.on("end", () => {
    // console.log(body.toString());
    let bodyStr = Buffer.concat(body).toString();
    console.log(`Data received (bodyStr): ${bodyStr}`);

    // response:
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    // parse the body
    if (bodyStr.length) {
      bodyStr = bodyStr.split("&");
      console.log("bodyStr: \n", bodyStr);
      const fName = bodyStr[0].split("=")[1];
      const lName = bodyStr[1].split("=")[1];

      // if (fName && lName) {
        response.write(
          `<h1>Hi ${fName} ${lName}!</h1>
          <p>Thank you for signing up.</p>`
          );
      // }
    } else {
      response.write(`<h1>Hi New User!!</h1>`);
    }

    response.write(
      `<form method="POST" action="/"> 
        <h1>Form</h1>
        <p>Enter your name and surname, then press Submit to sign up.</p>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="firstName" required ><br>
        
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lastName" required ><br><br>
        
        <input type="submit" value="Submit">
      </form>`
    );
    response.end();
  });
});

httpServer.listen(8080, (_) => console.log("The Server is Up!".toUpperCase()));
