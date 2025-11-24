const http = require('http');

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  console.log('Pathname:', urlObj.pathname);
  console.log('Search params:', urlObj.searchParams.toString());

  res.end('Check console');
});

server.listen(3000);
