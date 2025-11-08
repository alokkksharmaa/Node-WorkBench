const stream = require('stream');
const zlib = require('zlib');
const fs = require('fs');
const express = require('express');
const status = require('express-status-monitor');

const app = express();
const PORT = 8000;

app.use(status());

// Stream Read -> Zip -> Write
fs.createReadStream('./file.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("./file.zip"));

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./file.txt", "utf-8");
  stream.on("data", chunk => res.write(chunk));
  stream.on("end", () => res.end());
  stream.on("error", err => res.status(500).send(err.message));
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);


stream.ReadStream
stream.WriteStream
stream.Duplex
stream.Transform
