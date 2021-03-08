gm = require('gm');

async function grayscale(filePath) { 
    if (!filePath) {
        throw "grayscale is missing file path";
    } 

    return new Promise((resolve, reject) => {
        gm(filePath).colorspace("GRAY")
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("grayscaled!")
            resolve();
        });
    });

}

module.exports = grayscale;