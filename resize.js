gm = require('gm');

function resize(filePath, params) { 
    if (!filePath) {
        throw "flip is missing file path";
    }
    
    if (params.length != 2) {
        throw "invalid number of parameters for crop";
    }

    gm(filePath).resize(parms[0], parms[1])
    .write(filePath, function (err) {
        if(err) console.log(err);
        console.log("resized!")
    });
}

module.exports = resize;