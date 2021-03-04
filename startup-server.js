// COuld have a config file with list of commands it could support, so you could just have an image cropper
const registry = require('./command-registry');
const resize = require('./transforms/resize');
const flip = require('./transforms/flip');
const flop = require('./transforms/flop');
const rotate = require('./transforms/rotate');

function startupServer() {
    registry.add('resize', resize);
    registry.add('flip', flip);
    registry.add('flop', flop);
    registry.add('rotate', rotate);
}

module.exports = startupServer;

