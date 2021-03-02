const express = require('express');
const router = express.Router();
const registry = require('./command-registry');
const base64ImageToFile, toBase64 = require('./img-converter');

/* JSON request format {
   img: base64 encoded string
   transformation: [{"resize": [w, h]}, {"flip": null}, {"flop": null}]

   JSON response format {
      img: base64 encoded string
   }
} */
router.get('/processImg', (req, res, next) => {
   console.log('image received');
   let {img, transformation} = JSON.parse(res.body);

   const file;
   base64ImageToFile(img)
   .then((file) => {
      transformation.forEach(transform => {
         let {command, params} = JSON.parse(transform);
         file = registry[comand].call(file, params);
      });
   })
   .then(() => {
      res.json({'img': toBase64(file)});
   }).catch((err) => {
      console.error(err);
   });

   // res.json('Image processed!');
});

module.exports = router;
