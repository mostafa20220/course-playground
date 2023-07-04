// this node js code

const fs = require('fs');
const http  = require('http');

// const dataBuffer = 'This is a test data';

// fs.writeFile('notes.txt', dataBuffer, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });


// console.log(fs.readFileSync('notes.txt').toString());



// make a http server and listen on port 8080


const server = http.createServer((request, response, err) => {

    if (err) throw err;
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`<h1>Hello World!</h1>`);
    response.end();

});


server.listen(8080,_=>console.log("The server is up!"));