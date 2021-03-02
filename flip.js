gm = require('gm');

function flip(filePath) { 
    if (!filePath) {
        throw new Exception("flip is missing file path");
    }

    gm(filePath).crop(parms[0], parms[1]);
}

module.exports = flip;