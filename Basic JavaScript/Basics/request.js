import http from 'http';

const PORT = 4000;


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write("Default URL is: " + req.url + "\n");
  res.write("Default method is: " + req.method + "\n");
  // res.write("Headers data is: " + JSON.stringify(req.headers, null, 3) + "\n");

  if (req.url === '/about') {
    res.end('This is the About page. Welcome to your majestic HTTP empire.');
  } 
  else if (req.url === '/contact') {
    res.end('Contact me at: stop-bothering-me@example.com');
  } 
  else if (req.url === '/none') {
    res.end('None URL route hit.');
  } 
  else {
    // Default response for everything else
    res.end('Default URL: Server is running!');
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
