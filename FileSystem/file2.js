const fs = require('fs');

fs.writeFile("alok.txt", "First Line\n", (err) => {
  if (err) return console.log(err);


  fs.appendFile("alok.txt", "Second Line\n", (err) => {
    if (err) return console.log(err);
    console.log("Write append file done");

  });

});