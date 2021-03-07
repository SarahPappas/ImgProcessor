const fs = require('fs');
const { v4: uuid } = require('uuid');

const ERROR_1 = 'no file path provided';

async function base64ImageToFile(base64ImgString) {
    const buf = Buffer.from(base64ImgString, 'base64');
    const filepath = uuid();

    return new Promise((resolve, reject) => {
        fs.promises.writeFile(filepath, buf)
        .then(() => {
            console.log('file written, with filename: ', filepath);
            resolve(filepath);
        })
        .catch((err) => {
            console.error(err);
            reject(err);
        })
    })
}

async function toBase64(filepath) {
    if (!filepath) {
        throw ERROR_1;
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
    });
}

async function cleanUpFile(filepath) {
    if (!filepath) {
        throw ERROR_1;
    }

    return fs.promises.rm(filepath);
}

module.exports = { base64ImageToFile, toBase64, cleanUpFile };
