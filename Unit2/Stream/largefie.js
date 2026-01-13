import fs from "fs";

const readStream = fs.createReadStream("./");
const writeStream = fs.createWriteStream("copy_bigfile.txt");

console.log("Streaming started");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Streaming Completed");
});