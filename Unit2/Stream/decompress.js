const fs = require('fs');            
const zlib = require('zlib');        

// Step 1: Create a readable stream from the compressed file (.gz)
const readStream = fs.createReadStream('input.txt.gz');
// This reads input.txt.gz in chunks instead of loading the whole file in memory.

// Step 2: Create a Gunzip stream (this will decompress the data)
const gunzipStream = zlib.createGunzip();
// This takes compressed data and decompresses it chunk-by-chunk.

// Step 3: Create a writable stream for the output decompressed file
const writeStream = fs.createWriteStream('output.txt');
// Whatever gets decompressed will be saved into output.txt.

// Step 4: Pipe everything together
readStream
  .pipe(gunzipStream)                // Pass compressed data through the decompressor
  .pipe(writeStream)                 // Save decompressed data into output.txt
  .on('finish', () => {              // When writing is completely finished...
    console.log('File decompressed'); // ...print confirmation.
  });
