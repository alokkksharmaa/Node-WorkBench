import http from 'http';
import fs from 'fs';

const myServer = http.createServer((req, res) => {
  console.log("New requuest Recieved");
  res.end("Hello From Server");
})

myServer.listen(8000, () => console.log("Server Started"));