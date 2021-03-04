gm = require('gm');

async function rotate(filePath, params) { 
    if (!filePath) {
        throw "flip is missing file path";
    }
    
    if (!params || !(typeof params === 'string' || typeof params === 'number' && params != NaN || params != Infinity)) {
        throw "invalid parameters for rotate";
    }

    return new Promise((resolve, reject) => {
        let rotateDeg = params;
        if (typeof params === 'string') {
            if (params.toLowerCase() === "left") {
                rotateDeg = -90;
            } else if (params.toLowerCase() === "right") {
                rotateDeg = 90;
            } else {
                throw "Invalid arguement";
            }
        }

        gm(filePath).rotate("#00000000", rotateDeg)
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("rotated!")
            resolve();
        });
    });

}

module.exports = rotate;