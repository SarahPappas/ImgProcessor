const express = require('express');
const router = express.Router();
const registry = require('./command-registry');
const { base64ImageToFile, toBase64} = require('./img-converter');


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
   
   if (!req.body.img || !req.body.extension || !req.body.transformation) {
      console.error("Did not receive enough arguments", req.body);
      res.json("Not enough arguments were received");
   }

   const filepath = base64ImageToFile(req.body.img, req.body.extension);
   console.log(filepath);

   const transformation = req.body.transformation;
   transformation.forEach(transform => {
      console.log("tranform", transform);

      for (const prop in transform) {
         const command = prop;
         const params = transform[command];

         console.log("calling " + command + " with params " + params);
         console.log("registry", registry);
         const commandfn = registry.get(command);
         console.log("filepath", filepath);
         file = commandfn(filepath, params);
      }
   });

   res.json({'img': toBase64(file)});
   // }).catch((err) => {
   //    console.error(err);
   //    res.json({'error': 'there was an error processing your image'});
   // });

   // res.json('Image processed!');
});

module.exports = router;
