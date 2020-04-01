// Require the Events and Utility Module
const events = require("events");
const util = require("util");

// Create a Constructor
function Pulser() {
    events.EventEmitter.call(this);
}

// Have the Pulser class inherit from EventEmitter
util.inherits(Pulser, events.EventEmitter);

// Setup start function for the Pulser Class
Pulser.prototype.start = function () {
    setInterval(() => {
        util.log('>>> pulse');
        this.emit('pulse');
        util.log('<<<< pulse');
    }, 1000);
};

const pulser = new Pulser();

pulser.on('pulse', () => {
    util.log('Pulse Recieved!');
});

pulser.start();