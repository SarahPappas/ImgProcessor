gm = require('gm');

function resize(filePath, params) { 
    if (!filePath) {
        throw new Exception("flip is missing file path");
    }
    
    if (params.length != 2) {
        throw new Exception("invalid number of parameters for crop");
    }

    gm(filePath).resize(parms[0], parms[1]);
}

module.exports = resize;