import express from "express";

const ex = express();   // You gotta define this first

// Middleware here if needed, like ex.use(express.urlencoded())

ex.use(express.urlencoded({ extended: true }));


ex.get("/", (req, res) => {
  res.sendFile("form.html", { root: "public" });
});

ex.post("/submit", (req, res) => {
  res.send("data added");
});

ex.listen(3500, () => {
  console.log("Server running on port 3500");
});
