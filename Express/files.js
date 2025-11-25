const path = require('path');
const fs = require('fs');


app.use(express.static('public'));


app.get('/' , (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
