// https://github.com/aheckmann/gm
let fs = require('fs')

function base64ImageToFile(base64ImgString, extension) {
   
    // tokenize the data since the 64 encoded data look like this "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKAC"
    const buf = Buffer.from(base64ImgString, 'base64');

    const path = "temp." + extension;
    fs.writeFileSync(path, buf);
    console.log("file written");
    return path;
}

function toBase64(file) {
    data = fs.readFileSync(file, {encoding: 'base64'});
    console.log('base64 encoded', data);
}

module.exports = {base64ImageToFile, toBase64};
