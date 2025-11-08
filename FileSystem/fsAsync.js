const  fs = require('fs/promises');

async function createFile() {
  try {
    await fs.writeFile("Hello3.txt", "This is the Hello File", "utf-8");
    console.log("File Created SuccessFully!");
  } 
  catch (err) {
    console.error("Error Creating File:", err);
  }
}
createFile();
