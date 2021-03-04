gm = require('gm');

async function greysale(filePath) { 
    if (!filePath) {
        throw "greyscale is missing file path";
    } 

    return new Promise((resolve, reject) => {
        gm(filePath).colorspace("GRAY")
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("greyscaled!")
            resolve();
        });
    });

}

module.exports = greysale;