import express from 'express';
import { readFile } from 'fs/promises';


const app = express();
const PORT = 3000;


app.get("/" , async(req, res) => {
    try{
      const data = await readFile("data.txt", 'utf-8');
        res.send(`User home\n\n${data}`);
    }
    catch(err){
      console.log(err);
      res.status(500).send("Error reading file");
    }
});




app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});


