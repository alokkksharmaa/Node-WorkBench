import cookieParser from "cookie-parser";
import express from "express";

const app = express();
app.use(cookieParser());
const PORT = 3000;

app.get("/setcookie", (req, res) => {
  res.cookie("sessionid", "123");
  res.send("Cookie set");
});

app.get("/readcookie", (req, res) => {
  const value = req.cookies.sessionid;
  res.send("session id: " + value);
});

app.get("/deletecookie", (req, res) => {
  res.clearCookie("sessionid");
  res.send("Cookie deleted");
})

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000")
});