gm = require('gm');

async function flip(filePath) { 
    if (!filePath) {
        throw "flip is missing file path";
    }

    return new Promise((resolve, reject) => {
        gm(filePath).flip()
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("flipped!")
            resolve();
        });
    })
}

module.exports = flip;