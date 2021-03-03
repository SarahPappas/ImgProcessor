const express = require('express');
const router = express.Router();
const registry = require('./command-registry');
const base64ImageToFile = require('./img-converter');
const toBase64 = require('./img-converter');


/* JSON request format {
   img: base64 encoded string
   transformation: [{"resize": [w, h]}, {"flip": null}, {"flop": null}]

   JSON response format {
      img: base64 encoded string
   }
} */

// •	xFlip horizontal and vertical
// •	Rotate +/- n degrees
// •	Convert to grayscale
// •	xResize
// •	Generate a thumbnail
// •	Rotate left
// •	Rotate right

router.post('/processImg', (req, res, next) => {
   console.log('request received');
   console.log('body', req.body);
   
   if (!req.body.img || !req.body.transformation) {
      console.error("Did not receive enough arguments", req.body);
      res.json("Not enough arguments were received");
   }


   const file = null; 
   base64ImageToFile(req.body.img)
   .then((file) => {
      const transformation = req.body.transformation;
      transformation.forEach(transform => {
         let {command, params} = JSON.parse(transform);
         file = registry[command].call(file, params);
      });
   })
   .then(() => {
      res.json({'img': toBase64(file)});
   }).catch((err) => {
      console.error(err);
      res.json({'error': 'there was an error processing your image'});
   });

   // res.json('Image processed!');
});

module.exports = router;
