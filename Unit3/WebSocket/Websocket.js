import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send("<h1>Hello From Server </h1>");
});

server.listen(8000, () => {
  console.log(`server is running at http://localhost:8000`);
});
