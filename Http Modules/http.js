const http = require('http');

const myServer = http.createServer((req, res) => {
  //Made web server


  console.log("New Req Recieved");
  res.end("Hello from Server");
  res.end();  //Always Required , to terminate teh session 

});

myServer.listen(8000, () => console.log("Server Started"));
