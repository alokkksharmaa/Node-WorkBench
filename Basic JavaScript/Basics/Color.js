const cs = require("colors");
const ck = require("chalk");
const up = require("upper-case");


console.log(cs.red("Hello"));
console.log(cs.yellow.bold("Hello"));
console.log(cs.bold.green("Hello"));
console.log(cs.bold.blue("Hello"));



console.log(ck.magenta.bold("Hello from chalk!"));
console.log(up.upperCase("Helllo"));
