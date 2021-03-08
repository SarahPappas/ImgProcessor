const express = require('express');
const router = express.Router();
const registry = require('./command-registry');
const { base64ImageToFile, toBase64, cleanUpFile} = require('./img-converter');


/* JSON request format {
   img: base64 encoded string
   transforms: [{"resize": [w, h]}, {"flip": null}, {"flop": null}, {"rotate": right positive rotation degrees, left negative}]

   JSON response format {
      img: base64 encoded string
   }
} */
router.post('/processImg', (req, res, next) => {
   console.log('request received');
   console.log('body', req.body);
   
   if (!req.body.img || !req.body.transforms) {
      console.error("Did not receive enough arguments", req.body);
      res.json("Not enough arguments were received");
      return;
   }

   const transforms = req.body.transforms;
   let filepath = null;
   base64ImageToFile(req.body.img)
   .then(fp => {
      filepath = fp;
      return runTransforms(transforms, filepath);
   }).then(() => {
      console.log("done!");
      return toBase64(filepath);
   }).then(imgString => {
      // cleanUpFile(filepath);
      res.json({'img': imgString});
   }).catch((err) => {
      console.error(err);
      // cleanUpFile(filepath);
      res.json({'error': 'there was an error processing your image'});
   });
});

async function runTransforms(transforms, filepath) {
   for (transform of transforms) {
      const command = transform.name;
      let params = []
      for (const prop in transform) {
         if (prop != "name") {
            if (Array.isArray(transform[prop])) {
               params = params.concat(transform[prop])
            } else {
               params.push(transform[prop]);
            }
         }
      }

      console.log("calling " + command + " with params " + params);
      await registry.run(command, filepath, params);

   };
   return filepath;
}

module.exports = router;
