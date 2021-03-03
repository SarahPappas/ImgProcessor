gm = require('gm');

function flip(filePath) { 
    if (!filePath) {
        throw "flip is missing file path";
    }

    gm(filePath).flip();
}

module.exports = flip;