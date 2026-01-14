import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", (ws) => {
  // (b) user joined message
  wss.clients.foreach(client => {
    client.send("A new user has joined the chat");
  });
  ws.on("message", (msg) => {
    wss.clients.forEach(client => {
      client.send(msg.toString());
    });
  });
});

console.log("Server is running on ws://localhost:3000");