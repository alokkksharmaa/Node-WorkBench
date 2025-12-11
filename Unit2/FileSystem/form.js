import express from "express";
import fs from "fs";
import path from "path";

const ex = express();

ex.use(express.urlencoded({ extended: true }));

// Serve the HTML file
ex.get("/", (req, res) => {
  res.sendFile("file3.html", { root: "public" });
});

// WRITE FILE
ex.post("/write", (req, res) => {
  const { filename, data } = req.body;

  fs.writeFile(filename, data, "utf-8", (err) => {
    if (err) return res.send("Error while writing file.");
    res.send("File written successfully.");
  });
});

// READ FILE
ex.post("/read", (req, res) => {
  const { filename } = req.body;

  fs.readFile(filename, "utf-8", (err, fileData) => {
    if (err) return res.send("Error reading file.");
    res.send(`<h3>File Content:</h3><pre>${fileData}</pre>`);
  });
});

// Start server
ex.listen(4000, () => console.log("Server started at 4000"));
