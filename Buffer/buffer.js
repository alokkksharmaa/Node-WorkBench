// String se buffer
const buf1 = Buffer.from('Hello');
console.log(buf1);          // <Buffer 48 65 6c 6c 6f>
console.log(buf1.toString()); // Hello

// Fixed size buffer
const buf2 = Buffer.alloc(10);  // 10 bytes, all 0
buf2.write('Hi');
console.log(buf2.toString());   // "Hi" + some null chars
