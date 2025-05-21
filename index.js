// Events in Node Js:
/*
Link: https://nodejs.org/api/process.html#process-event
*/

// Way#1:
// CJS: Common JavaScript => Commonly used way since node early versions - default (works immediately)
// using the require() function: 
const process = require('node:process'); // C => Classical Way (old fashion but still in use)

// Way#2:
// We can use either one, BUT we can use both at the same time!!!
// ESM: EcmaScript Module => New way of using ES with Module - needs some setting :-)
// using the "import" keyword:
// import process from 'node:process'; // M => Modern Way (since ES6 , 2015)
// SyntaxError: Cannot use import statement outside a module
// This error to be fixed later :-)

// doEvent => CB => Callback (Function) 
// CB => passing a function as an argument to another function/method:
process.on('exit', doEvent);

function doEvent() {
    console.log("Learning about Event (Review1)");
}

// Anonymous Arrow Function:
process.on('exit', () => {
    console.log("Learning about Event (Review2)");
});

process.on('beforeExit', function () {
    console.log("Don't forget to always review the lecture code :-)");
});

// EventEmitter class to create our own personal events!
// *****************************************************
// Link: https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
// Link: https://nodejs.org/api/events.html#class-eventemitter


// CJS: (default supported)
const EventEmitter = require('node:events');

// ESM: (needs some settings)
// import EventEmitter from 'node:events';

let myEvent = new EventEmitter();
/*
This object "myEvent" has two commonly/most used methods: "on" and "emit"
> "on" is used to add a callback function that's going to be executed when the event is triggered
> "emit" is used to trigger an event
*/

/*
Following the same template from Node.js built-in events:
myEvent.on("Event-Name", Function)

Anonymous arrow function:
() => { }
*/

// using "on" to create the event:
myEvent.on("drive", () => {
    console.log("Start driving!");
});

// using "emit" to call our event:
myEvent.emit('drive');

myEvent.on("swim", () => {
    console.log("start swimming but don't go far!");
});

myEvent.emit('swim');