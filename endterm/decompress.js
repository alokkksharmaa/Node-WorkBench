import fs from "fs";
import zlib from "zlib";

fs.createReadStream("decompressed.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("decomprerssed.txt"));

console.log("File decompressed Successfully");

