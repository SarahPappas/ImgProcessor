const registry = require('./command-registry');
const resize = require('./transforms/resize');
const flip = require('./transforms/flip');
const flop = require('./transforms/flop');
const rotate = require('./transforms/rotate');
const greyscale = require('./transforms/greyscale');

function startupServer() {
    registry.add('resize', resize);
    registry.add('flip', flip);
    registry.add('flop', flop);
    registry.add('rotate', rotate);
    registry.add('greyscale', greyscale);
}

module.exports = startupServer;

