const http = require('http');

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const q = urlObj.searchParams.get('q');
  const limit = urlObj.searchParams.get('limit') || '10';

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ q, limit }));
});

server.listen(3000);
