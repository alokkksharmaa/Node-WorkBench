import repl from 'repl';


let numbers = [];
let sum = 0;
let average = 0;
let max = -Infinity;

const r = repl.start({
  prompt: 'Enter a number (or "done"): ',
  eval: (cmd, context, filename, callback) => {
    const input = cmd.trim();
    if (input.toLowerCase() === 'done') {
      // Handled in the 'line' event listener
      callback(null);
      return;
    }

    const number = parseFloat(input);
    if (!isNaN(number)) {
      numbers.push(number);
      sum += number;
      if (number > max) {
        max = number;
      }
      console.log(`Added: ${number}`);
    } else {
      console.log('Invalid input. Please enter a number or "done".');
    }
    callback(null);
  }
});