const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/delete", (req, res) => {
  const fileName = req.body.filename;
  const filePath = path.join(__dirname, fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.send("No file found");
    }
    res.send("File deleted successfully");
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
