const fs = require('fs');

const readStream = fs.createReadStream('bigFile.txt');
const writeStream = fs.createWriteStream('copy.txt');


readStream.pipe(writeStream);


writeStream.on('finish', () => {
  console.log("Copy Done");
});


readStream.on('data', chunk => {
  console.log('Chunk size:', chunk.length);
});

readStream.on('end', () => {
  console.log('File finished');
});
