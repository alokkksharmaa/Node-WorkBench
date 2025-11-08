// const Aman = require("./second")

// console.log("Hello World", Aman)

// const os = require('os')

// console.log(os.freemem())

// console.log(os.machine())
// // console.log(os.networkInterfaces())
// console.log(os.platform())
// console.log(os.type())
// console.log(os.release())

const os = require('os');
const uptime = os.uptime();

const hours = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);

console.log(`Uptime: ${hours}h ${minutes}m ${seconds}s`);
