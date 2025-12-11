import { WebSocket, WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
  console.log("Client Connected");

  ws.on('message', (message) => {
    console.log("Recieved:", message.toString());
    ws.send("Hello From Websocket");
  });

  ws.on('close', () => {
    console.log("Client Disconnected");
  });

});