const registry = require('./command-registry');
const resize = require('./transforms/resize');
const flip = require('./transforms/flip');
const flop = require('./transforms/flop');
const rotate = require('./transforms/rotate');
const greyscale = require('./transforms/greyscale');
const thumbnail = require('./transforms/thumbnail');

function startupServer() {
    registry.add('resize', resize);
    registry.add('flip', flip);
    registry.add('flop', flop);
    registry.add('rotate', rotate);
    registry.add('greyscale', greyscale);
    registry.add('thumbnail', thumbnail);
}

module.exports = startupServer;

