import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  console.log("Anew User Connected", socket.id);
});


app.get('/', (req, res) => {
  res.send("<h1> Hello World");
});

app.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});