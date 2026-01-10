import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

// set a cookie
app.get("/set", (req, res) => {
  res.cookie("user", "Alok", { maxAge: 6000 });
  res.send("Cookie Set");
});


app.get("/get", (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
  res.send("Cookie Get");
});

app.listen(PORT, () => {
  console.log("Server Running on", PORT);
});