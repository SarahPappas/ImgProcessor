gm = require('gm');

async function rotate(filePath, params) { 
    if (!filePath) {
        throw "rotate is missing file path";
    }
    
    if (!params || 
        params.length < 1 ||
        !(typeof params[0] === 'string' || typeof params[0] === 'number') ||
        (typeof params[0] === 'number' && (params[0] == NaN || params[0] == Infinity))) {
        throw "invalid parameters for rotate";
    }

    return new Promise((resolve, reject) => {
        let rotateDeg = params[0];
        if (typeof params[0] === 'string') {
            if (params[0].toLowerCase() === "left") {
                rotateDeg = -90;
            } else if (params[0].toLowerCase() === "right") {
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