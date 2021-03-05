gm = require('gm');

async function thumbnail(filePath, params) { 
    if (!filePath) {
        throw "thumbnail is missing file path";
    }
    
    if (!params || typeof params !== 'number' || params == NaN || params == Infinity) {
        throw "invalid number of parameters for thumbnail";
    }

    return new Promise((resolve, reject) => {
        gm(filePath).resize(params, params)
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("thumbnailed!")
            resolve();
        });
    });

}

module.exports = thumbnail;