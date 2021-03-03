gm = require('gm');

function flop(filePath, params) { 
    if (!filePath) {
        throw "flop is missing file path";
    } 

    gm(filePath).flop();
}

module.exports = flop;