import fs from 'fs';

fs.writeFile("file.txt", "hello", "utf-8", (err, data) => {
  if (err) {
    console.log("Error creatig file");
    return;
  } else {
    console.log(data)
    console.log("File Created");
  }


  fs.readFile("file.txt", 'utf-8', (err, data) => {
    if (err) {
      console.log("Error reading file");
      return;
    }
    else {
      console.log(data);
    }


  });

});