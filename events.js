// This is an example of event

// To include the built-in Events module use the require() method. In addition, all event properties and methods are an
// instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

const fs = require('fs');
const events = require('events');

const EventEmitter = new events.EventEmitter();

// const rs = fs.createReadStream('./newfileone.txt');

// rs.on('open', () => {

//     console.log('File is opened');
// })


const myEventHandler = function() {

    console.log('I hear a scream');
}


EventEmitter.on('scream', myEventHandler);

EventEmitter.emit('scream');