import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("Connection", (socket) => {
  console.log("A new user has Connected" ,  socket.id);
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'public')));

server.listen(3030, () => {
  console.log(`server running at http://localhost:3030`)
});