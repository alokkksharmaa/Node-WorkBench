import express from 'express';

const app = express();
const PORT = 8000;


app.get("/", (req, res) => {
  res.send("User Home");
  console.log("User Home");
});

app.get("/Profile", (req, res) => {
  res.send("User Profile");
});

app.get("/dashboard", (req, res) => {
  res.send("User DashBoard");
})

app.listen(PORT,  () => {
  console.log(`App is running on http://localhost//${PORT}`);
});