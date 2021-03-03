// https://github.com/aheckmann/gm
let fs = require('fs')

function base64ImageToFile (base64ImgString) {
   
    // tokenize the data since the 64 encoded data look like this "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKAC"
    const base64ImgStringSections = base64ImgString.split(',');
    const imgByteArray = Base64.decode(base64ImgStringSections[1]);
    const inputStream = new ByteArrayInputStream(imgByteArray);

    //Find out image type
    let mimeType = null;[              ]
    let fileExtension = null;
    try {
        mimeType = URLConnection.guessContentTypeFromStream(inputSTream); //mimeType is something like "image/jpeg"
        const words = mimeType.split('/');
        fileExtension = words[1];
    } catch (error){
        console.error(error);
        return error;
    }

    const path = "temp." + fileExtension;
    fs.writeFileSync(path, imgByteArray);
    return path;

    // return new Promise((resolve, reject) => { 
    //     fs.open(path, 'r+', (err, file) => {
    //         if (err) {
    //             reject(console.err(err));
    //         }

    //         resolve(file);
    //     })
    // });
}

function toBase64(file) {
    data = fs.readFileSync(file, {encoding: 'base64'});
    console.log('base64 encoded', data);
}

module.exports = {base64ImageToFile, toBase64};