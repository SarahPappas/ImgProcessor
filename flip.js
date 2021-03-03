gm = require('gm');

function flip(filePath) { 
    if (!filePath) {
        throw "flip is missing file path";
    }

    gm(filePath).crop(parms[0], parms[1]);
}

module.exports = flip;