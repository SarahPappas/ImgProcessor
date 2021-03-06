const express = require('express');
const router = express.Router();
const registry = require('./command-registry');
const { base64ImageToFile, toBase64, cleanUpFile} = require('./img-converter');


/* JSON request format {
   img: base64 encoded string
   transformation: [{"resize": [w, h]}, {"flip": null}, {"flop": null}, {"rotate": right positive rotation degrees, left negative}]

   JSON response format {
      img: base64 encoded string
   }
} */
router.post('/processImg', (req, res, next) => {
   console.log('request received');
   console.log('body', req.body);
   
   if (!req.body.img || !req.body.extension || !req.body.transformation) {
      console.error("Did not receive enough arguments", req.body);
      res.json("Not enough arguments were received");
      return;
   }

   const filepath = base64ImageToFile(req.body.img, req.body.extension);
   const transformation = req.body.transformation;
   
   runTransformation(transformation, filepath).then(() => {
      console.log("done!");
      const imgString = toBase64(filepath);
      // cleanUpFile(filepath);
      res.json({'img': imgString});
   }).catch((err) => {
      console.error(err);
      // cleanUpFile(filepath);
      res.json({'error': 'there was an error processing your image'});
   });
});

async function runTransformation(transformation, filepath) {
   for (transform of transformation) {
      for (const prop in transform) {
         const command = prop;
         const params = transform[command];

         console.log("calling " + command + " with params " + params);
         await registry.run(command, filepath, params);
      }

   };
   return filepath;
}

module.exports = router;
