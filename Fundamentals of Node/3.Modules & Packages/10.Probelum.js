/**
 * Events in Node.js
Description
You are required to create an event named sum whose listener function will calculate the sum of two numbers.

Input Description:
The first line of input takes a number.
The second line of input takes another number.

Output Description:
The first line of output should consist of the sum of the two numbers taken as input.
 */

// WARNING: Do not edit the code outside the region BEGIN and END mentioned below. If you do so, the test cases may not pass.
 
// Read the variable from STDIN
process.stdin.on('data', function(chunk) {
    let lines = chunk.toString().split('\n');
    let number1 = parseInt(lines[0]);
    let number2 = parseInt(lines[1]);
    
     // BEGIN: Write all your code below this line
     
     // TODO 1: Import the events module
     const events = require('events');
     // TODO 2: Create an object of EventEmitter class
     const eventEmitter = new events.EventEmitter();
     // TODO 3: Bind an event named 'sum' to this object. The listener function associated with it should calculate the sum of two numbers and print it on the console.
     /**
      * Function as event handler of the 'sum' event to print sum of two given numbers
      * @param {Number} number1 - first number
      * @param {Number} number2 - second number
      */ 
     eventEmitter.on('sum', (n1, n2) => {
        let data = n1 + n2;
        console.log(data);
    });
     // TODO 4: Fire an event and pass two arguments number1 and number2 to the listener function
     eventEmitter.emit('sum', number1, number2);
 
 
     // END: Write all your code above this line
 });