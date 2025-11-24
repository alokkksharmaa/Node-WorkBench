const fs = require('fs');


fs.writeFile('input.txt', "Alok" , 'utf-8' , (err) => {
  if(err) return console.log(err);
})

fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err);

  console.log('Type of data:', data instanceof Buffer); // true
  console.log('As string:', data.toString('utf-8'));
});
