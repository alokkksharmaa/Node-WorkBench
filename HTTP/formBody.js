const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('JSON received:', data);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true, data }));
      } catch (e) {
        res.statusCode = 400;
        res.end('Invalid JSON');
      }
    });
  } else {
    res.end('Send POST /api');
  }
});

server.listen(3000);
