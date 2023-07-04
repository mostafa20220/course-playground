// write simple http server in nodejs

const http = require("http");
const fs = require("fs");

const httpServer = http.createServer((request, response, err) => {
  if (err) throw err;
  console.log(request);
  response.write(
    '<h1 style="color: red; background-color:white;">Hello World</h1>'
  );
});

httpServer.listen(4444, (_) => console.log("The Server is Up!".toUpperCase()));
