const fs = require('fs');

fs.writeFileSync("input.txt", "Hello world", { encoding: "utf-8" });


fs.readFile("input.txt", 'utf-8', (err, data) => {
  if (err) {
    console.error("Error", err);
    return;
  }
  console.log("File data", data);
});


console.log("ye pehle print ho skta hai");