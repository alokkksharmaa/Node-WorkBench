import http from "http";
import { parse } from "path";

http.createServer((req, res) => {
  const q = parse(req.url, true).query.search;

  res.setHeader("Content Type", "Application/json");

  req.end(JSON.stringify({ search: q || "none" }));
}).listen(3000);


console.log("Server running on http://localhost:3000");