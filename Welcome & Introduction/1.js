/**
 * Introduction to the program
This program will help you get started with Node.js which is an open-source, JRE that helps develop fact and scalable Web Applications.
You will also learn how you can automatically run your code using a package  
You will also see the applications of these packages and see how they make our life as a developer easy.
 */


const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);

/**
 * This will start the server and it will be listening on port 8080. You can now test the server by opening a web browser and navigating to http://localhost:8080. You should see the text "Hello, World!" displayed on the page.
 */