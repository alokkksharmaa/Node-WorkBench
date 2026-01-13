import fs from 'fs';
import zlib from 'zlib';

// Step 1: Create a file named input.txt and write "Alok" into it
fs.writeFile('input.txt', 'Alok', 'utf-8', (err) => {
  if (err) return console.error(err);
});

// Step 2: Create a readable stream from input.txt
const readStream = fs.createReadStream('input.txt');

// Step 3: Create a gzip transform stream (compressor)
const gzip = zlib.creategzip();

// Step 4: Create a writable stream for the compressed output file
const writeStream = fs.createWriteStream('input.txt.gz');

// Step 5: Pipe data: readStream → gzip → writeStream
readStream
  .pipe(gzip)          // compress the data
  .pipe(writeStream)   // write compressed data to input.txt.gz
  .on('finish', () => {
    console.log("File Compressed");
  });