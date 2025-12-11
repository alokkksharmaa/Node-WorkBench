const fs = require('fs')

// fs.readFile('erffile.txt', 'utf-8', (error, data) => {
//   console.log(error, data)
// })

// fs.writerFileSync("Hello.txt", "Hello Wolrd ", "UTF-8");
// fs.writerFileSync("Hello.txt", "\n this is the new file", "UTF-8");

// console.log("Finished Reading File");

// const data = fs.readFileSync("Hi.txt");
// console.log(data.toString());


// fs.renameSync("Hi.txt", "World.txt");
// fs.unlinkSync("Hello.txt");

// const fs = require('fs');

// Create directory with permissions
fs.mkdirSync("Newdir", { mode: 0o777 });  // note the 0o for octal

// Create file inside directory
fs.writeFileSync("Newdir/Hello.txt", "Hello", "utf-8");


fs.mkdirSync("Newdir");
fs.writeFileSync("Newdir/Hello.txt", "Hello", "utf-8");





// 1.CallBack && Promises
// console.log(fs.readFile());