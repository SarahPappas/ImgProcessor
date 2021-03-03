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
   let parsedJson;
   try {
      parsedJson = JSON.parse(req.body); // can throw error
   } catch {
      console.error("Json cannot be parsed.");
      res.json("There was an error parsing the JSON");
      return;
   }

   console.log("parsed Json", parsedJson.img);
   const file = null; 
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
      res.json({'error': 'there was an error processing your image'});
   });

   // res.json('Image processed!');
});

module.exports = router;
