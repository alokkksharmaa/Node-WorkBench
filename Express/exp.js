const express = require('express');
const http = require('http');


const app = express();

app.get('/', (req, res) => {
  return res.send("Hello From Express");
})

app.get("/about", (req, res) => {
  return res.send("About Page");
})

app.post('/about', (req, res) => {
  return res.send("Hello from Post!" + 'hey' + req.query + 'you are' + req.query.age);
})

app.listen(8000, () => console.log("Server Started!"));

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started!"));