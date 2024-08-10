// Import events module
const events = require('events');

// Create an object of EventEmitter class
const eventEmitter = new events.EventEmitter();

// Define connectionMade event's handler
const connectionHandler = () => {
    console.log('Connection succesful!');
    // fire dataRecieved event
    eventEmitter.emit('dataReceived');
};

// bind connectionMade event with its event handler
eventEmitter.on('connectionMade', connectionHandler);

// bind dataReceived event with its event handler
eventEmitter.on('dataReceived', () => {
    console.log('Data received succesfully!');
});

// Fire connectionMade event
eventEmitter.emit('connectionMade');

// mark end of program
console.log('End of program!');