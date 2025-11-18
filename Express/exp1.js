import express from "express";

const ex = express();

ex.get("/", (req, res) => {
  res.sendFile("from.html", { root: "public" });

});

ex.post("/submit", (res, res) => {
  res.send("data added");
});

ex.get("/adduser", (req,res) => {
  res.sendFile("")
})

ex.listen(3500);