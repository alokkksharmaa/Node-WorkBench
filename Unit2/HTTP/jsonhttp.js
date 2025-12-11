const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === "/create") {
    const data = { name: "Alok", Age: 21 };

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        res.end("Error Writing File");
      } else {
        res.end("File Create Successfully");
      }   
    });

  } else {
    res.end("Welcome to Home Page");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
})

