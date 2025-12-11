import http from "http";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From Express");
});

app.get("/about", (req, res) => {
  return res.send("Hi from about page");
});

app.use((req, res, next) => {
  console.log("Hello From Middleware1");
});
app.listen(8000, () => {
  console.log(`I am Started at ${PORT}`);
});
