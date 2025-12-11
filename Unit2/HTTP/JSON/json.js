// 2. Working with JSON in Node.js

// Node mein JSON ka combo:

// JSON.stringify(obj) → JS object → JSON string

// JSON.parse(jsonString) → JSON string → JS object

const fs = require('fs');

fs.readFile("alok.json", 'utf-8', (err,jsonData) =>{
  if(err){
    console.log("File not read",err);
  }
  else{
    console.log("File read");
  };
});
