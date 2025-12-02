const express = require('express');
const app = express();
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello Express!');
  console.log("Hello From Express");
});

app.listen(PORT, () => {
  console.log(`Server running at <http://localhost>:${PORT}`);
});
