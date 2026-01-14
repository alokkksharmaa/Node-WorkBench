import fs from "fs";
import zlib from "zlib";

fs.createReadStream("large.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("large.txt.gz"));

console.log("File Compressed Successfully");