import fs from "fs";
import { argv } from "process";

const file = argv[2];

if (!file) {
  console.log("Please provide a filename.");
  process.exit(1);
}

fs.readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.log("File not found. Please check the filename.");
    return;
  }

  const lines = data.split("\n").length;
  const words = data.trim().split(/\s+/).length;
  const characters = data.length;

  console.log("Lines:", lines);
  console.log("Words:", words);
  console.log("Characters:", characters);
});
