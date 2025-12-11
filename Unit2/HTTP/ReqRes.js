const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);

  res.end('OK');
});