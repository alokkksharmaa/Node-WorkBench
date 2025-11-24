const fs = require('fs');

fs.writeFile('data.json', '{"name":"Alok","age":21}', 'utf-8', err => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Made Successfully");
  }

  fs.readFile('data.json', 'utf-8', (err, jsonData) => {
    if (err) return console.error(err);

    const obj = JSON.parse(jsonData);  // Json goes and to read teh data to convert it into { name: "Alok", age: 20 }
    obj.age += 1;  //increase age by +1

    fs.writeFile('data.json', JSON.stringify(obj, null, 2), (err) => {
      if (err) return console.error(err);
      console.log('Updated JSON saved');
    });
  });
});