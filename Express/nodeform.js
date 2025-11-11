import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {
    fs.readFile("NodeWorkbench/Express/nodeform.html", "utf-8", (err, data) => {
      if (err) {
        res.end("Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  } else if (req.url === "/submit" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data Added Successfully\n\n" + body);
    });

  } else {
    res.end("Invalid Route");
  }

}).listen(4800);
