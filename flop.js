gm = require('gm');

function flop(filePath, params) { 
    if (!filePath) {
        throw "flop is missing file path";
    } 

    gm(filePath).flop()
    .write(filePath, function (err) {
        if(err) console.log(err);
        console.log("flopped!")
    });
}

module.exports = flop;