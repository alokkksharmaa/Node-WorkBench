import http from 'http';
import express from 'express';
import path from 'path';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';

// 1. Setup __dirname for ES Modules (import syntax)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();          
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  // 3. Fix: sendFile requires an absolute path
  res.sendFile(path.join(__dirname, "index.html"));
});

// 4. Basic Socket.io connection handler to test functionality
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});