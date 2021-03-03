// https://github.com/aheckmann/gm
let fs = require('fs')

function base64ImageToFile(base64ImgString, extension) {
    const buf = Buffer.from(base64ImgString, 'base64');

    const path = "temp." + extension;
    fs.writeFileSync(path, buf);
    console.log("file written");
    return path;
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

module.exports = {base64ImageToFile, toBase64};
