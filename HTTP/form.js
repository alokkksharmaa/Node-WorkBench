const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Buffer to string
    });

    req.on('end', () => {
      const formData = querystring.parse(body);
      console.log(formData); // { name: 'Alok', age: '21' }

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'ok', received: formData }));
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }

});

server.listen(3000);
