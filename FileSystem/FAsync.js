const fs = require('fs');
const { console } = require('inspector');

// fs.writeFileSync('file.txt', "Alok", { encoding: "utf-8" });

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log("File Not created", err)
    return;
  }
  console.log("File data: ", data);
});

console.log("Alok Wins");
