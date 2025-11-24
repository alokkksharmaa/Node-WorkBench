const http = require('http');              
// Import the built-in HTTP module so we can create a server.

const server = http.createServer((req, res) => { 
// Create a web server. This function runs every time someone sends a request.

  res.statusCode = 200;                     
  // Set the HTTP status code to 200 (success).

  res.setHeader('Content-Type', 'text/plain');  
  // Tell the client that the response will be plain text.

  res.end('Hello from Node server\n');      
  // Send the final response text and close the connection.
});

server.listen(3000, () => {                 
// Start the server and make it listen on port 3000.

  console.log('Server running on http://localhost:3000');  
  // Log a message to show the server is active.
});



// import http from 'http';
// import fs from 'fs';

// const myServer = http.createServer((req, res) => {
//   console.log("New request Recieved");
//   res.end("Hello From Server");
// })

// myServer.listen(8000, () => console.log("Server Started"));

