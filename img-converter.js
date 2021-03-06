const fs = require('fs');
const { v4: uuid } = require('uuid');


function base64ImageToFile(base64ImgString, extension) {
    const buf = Buffer.from(base64ImgString, 'base64');

    const filename = uuid() + "." + extension;
    fs.writeFileSync(filename, buf);
    console.log("file written, with filename: ", filename);
    return filename;
}

function toBase64(filepath) {
    if (!filepath) {
        throw 'no file path provided';
    }

    const img = fs.readFileSync(String(filepath));
    const base64ImgString = Buffer.from(img, 'binary').toString('base64');

    console.log('base64 encoded', base64ImgString);
    return base64ImgString;
}

async function cleanUpFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.rm(filepath, (err) => {
            if(err) {
                console.log(err);
                reject(err);
            }
            resolove();
        });
    });
}

module.exports = {base64ImageToFile, toBase64, cleanUpFile};
