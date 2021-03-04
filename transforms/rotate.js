gm = require('gm');

async function rotate(filePath, params) { 
    if (!filePath) {
        throw "flip is missing file path";
    }
    
    if (!params) {
        throw "invalid number of parameters for rotate";
    }

    return new Promise((resolve, reject) => {
        gm(filePath).rotate("#00FFFFFF", params)
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