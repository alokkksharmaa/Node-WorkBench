import http from 'http';


http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("Hello How Are you?");
  res.write("\n Hello how are you <br>");

   

  // console.log("Status of Writable is: " + res.writable);
  // console.log("Status of writableEnded is" + res.writableEnded);


  res.end("\nPage Ended");

  // console.log("Status of Writable end()  is: " + res.writable);
  // console.log("Status of writableEnded  end() is" + res.writableEnded);
}).listen(9002);