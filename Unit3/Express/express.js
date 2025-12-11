const express = require('express');
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express <h1>HTML</h1>");
});

app.get("/home", (req, res) => {
  res.send("This is Home Page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




// import express from 'express'
// const { body, validationResult } = require('express-validator');

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get("/Alok",  (req,res) =>{
//   res.write("Alok Kumar Sharma");
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })