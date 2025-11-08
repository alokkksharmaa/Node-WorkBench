import express from 'express'
const { body, validationResult } = require('express-validator');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/Alok",  (req,res) =>{
  res.write("Alok Kumar Sharma");
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})