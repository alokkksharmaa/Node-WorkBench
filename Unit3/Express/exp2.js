const express = require('express');
const http = require('http');

const app = express();  // lowercase here

app.get('/about', (req, res) => {
  res.send('Hello From express');
});

const myServer = http.createServer(app);  // and lowercase here too

myServer.listen(8000, () => console.log('Server Started!'));
