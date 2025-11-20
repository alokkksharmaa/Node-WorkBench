import express from 'express';
const ex = express();

function ageCheck(req, res, next) {
  if (req.query.age < 18) {
    res.send("You are not allowed to visit this site");
  }
  next();
}
ex.use(ageCheck);
ex.get("/home", (req, res) => {
  res.send("Welcome to the page");
});