// COuld have a config file with list of commands it could support, so you could just have an image cropper
const registry = require('./command-registry');
const resize = require('./resize');
const flip = require('./flip');
const flop = require('./flop');

function startupServer() {
    registry.add('resize', resize);
    registry.add('flip', flip);
    registry.add('flop', flop);
}

module.exports = startupServer;

