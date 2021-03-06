const fs = require('fs');
const { v4: uuid } = require('uuid');


function base64ImageToFile(base64ImgString, extension) {
    const buf = Buffer.from(base64ImgString, 'base64');

    const filename = uuid() + "." + extension;
    fs.writeFileSync(filename, buf);
    console.log("file written, with filename: ", filename);
    return filename;
}

async function toBase64(filepath) {
    if (!filepath) {
        throw 'no file path provided';
    }

    return new Promise((resolve, reject) => {
        fs.promises.readFile(filepath)
        .then((img) => {
            const base64ImgString = Buffer.from(img, 'binary').toString('base64');
            console.log('base64 encoded', base64ImgString);
            resolve(base64ImgString);
        })
        .catch((err) => {
            console.error(err);
            reject(err);
        })
    })
}

async function cleanUpFile(filepath) {
    return fs.promises.rm(filepath);
}

module.exports = {base64ImageToFile, toBase64, cleanUpFile};
