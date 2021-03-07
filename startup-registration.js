const registry = require('./command-registry');
const resize = require('./transforms/resize');
const flip = require('./transforms/flip');
const flop = require('./transforms/flop');
const rotate = require('./transforms/rotate');
const grayscale = require('./transforms/grayscale');
const thumbnail = require('./transforms/thumbnail');

function startupServer() {
    registry.add('resize', resize);
    registry.add('flip', flip);
    registry.add('flop', flop);
    registry.add('rotate', rotate);
    registry.add('grayscale', grayscale);
    registry.add('thumbnail', thumbnail);
}

module.exports = startupServer;

