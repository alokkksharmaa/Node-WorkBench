import net from 'net';

const server = net.createServer((socket) => {
  console.log("Client Connected");
  
  socket.write("Hello Client");
  socket.on("data", (data) => {
    console.log("Recieved", data.toString());
  });
  socket.on("end", () => {
    console.log("Client Disconnected");
  });
});

server.listen(3000);
