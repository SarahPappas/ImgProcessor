gm = require('gm');

async function thumbnail(filePath, params) { 
    if (!filePath) {
        throw "thumbnail is missing file path";
    }
    
    if (!params || 
        params.length < 1 ||
        typeof params[0] !== 'number' || 
        params[0] == NaN || 
        params[0] == Infinity ) {
        throw "invalid number of parameters for thumbnail";
    }

    return new Promise((resolve, reject) => {
        gm(filePath).thumb(params[0], params[0], filePath, 100, function (err) {
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