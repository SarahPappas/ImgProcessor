gm = require('gm');

async function resize(filePath, params) { 
    if (!filePath) {
        throw "resize is missing file path";
    }
    
    if (params.length != 2) {
        throw "invalid number of parameters for resize";
    }

    return new Promise((resolve, reject) => {
        gm(filePath).resize(parms[0], params[1])
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("resized!")
            resolve();
        });
    });

}

module.exports = resize;