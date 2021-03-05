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
   }

   const filepath = base64ImageToFile(req.body.img, req.body.extension);
   console.log(filepath);

   // TODO: Command calls are async, how to for loop to wait fo async call to finish for next iteration.
   const transformation = req.body.transformation;
   
   runTransformation(transformation, filepath).then(() => {
      console.log("done!");
      const imgString = toBase64(filepath);
      cleanUpFile(filepath);
      res.json({'img': imgString});
   }).catch((err) => {
      cleanUpFile(filepath);
      console.error(err);
      res.json({'error': 'there was an error processing your image'});
   });
});

async function runTransformation(transformation, filepath) {
   for (transform of transformation) {
      console.log("tranform", transform);

      for (const prop in transform) {
         const command = prop;
         const params = transform[command];

         console.log("calling " + command + " with params " + params);
         console.log("registry", registry);
         const commandfn = registry.get(command);
         console.log("filepath", filepath);
         await commandfn(filepath, params);
         console.log("next");
      }

   };
   return filepath;
}

module.exports = router;
