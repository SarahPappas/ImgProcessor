gm = require('gm');

function flop(filePath, params) { 
    if (!filePath) {
        throw "flop is missing file path";
    } 

    return new Promise((resolve, reject) => {
        gm(filePath).flop()
        .write(filePath, function (err) {
            if(err) {
                console.log(err);
                reject(err);
            }
            console.log("flopped!")
            resolve();
        });
    });

}

module.exports = flop;