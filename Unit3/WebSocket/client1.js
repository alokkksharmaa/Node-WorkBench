import net from 'net';
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server");
  client.write("Hello Server");
});
client.on("data", (data) => {
  console.log("Server Says", data.toString());
  client.end();
});