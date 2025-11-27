import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "practice.html"));
});

// WRITE file
app.post("/write", (req, res) => {
  const { filename, data } = req.body;

  fs.writeFile(`./${filename}`, data, (err) => {
    if (err) return res.send("Error writing file");

    res.send(`
      <h2>File created successfully with name: ${filename}</h2>
      <a href="/">Go back</a>
    `);
  });
});

// READ file
app.post("/read", (req, res) => {
  const { filename } = req.body;

  fs.readFile(`./${filename}`, "utf-8", (err, data) => {
    if (err) return res.send("File not found!");

    res.send(`
      <h2>Data inside ${filename}:</h2>
      <pre>${data}</pre>
      <a href="/">Go back</a>
    `);
  });
});

app.listen(3001, () => console.log("Server running on port 3001"));
