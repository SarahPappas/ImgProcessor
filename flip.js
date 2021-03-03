gm = require('gm');

function flip(filePath) { 
    if (!filePath) {
        throw "flip is missing file path";
    }

    gm(filePath).flip()
    .write(filePath, function (err) {
        if(err) console.log(err);
        console.log("flipped!")
    });;
}

module.exports = flip;