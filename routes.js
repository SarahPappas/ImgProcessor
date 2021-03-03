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

   // TODO: Command calls are async, how to for loop to wait fo async call to finish for next iteration.
   const transformation = req.body.transformation;
   // transformation.forEach(transform => {
   //    console.log("tranform", transform);

   //    for (const prop in transform) {
   //       const command = prop;
   //       const params = transform[command];

   //       console.log("calling " + command + " with params " + params);
   //       console.log("registry", registry);
   //       const commandfn = registry.get(command);
   //       console.log("filepath", filepath);
   //       commandfn(filepath, params);
   //       console.log("next");
   //    }

   // });

   function runNextCommand(i) {
      const transform = transformation[i];
      for (const prop in transform) {
         const command = prop;
         const params = transform[command];
         const commandfn = registry.get(command);
         console.log("filepath", filepath);
         commandfn(filepath, params)
         .then(() => {
            i++;
            if (i < transformation.length) {
               runNextCommand(i);
            } else { 
               return;
            }
         });
      }
   };

   const runTransformations = new Promise((resolve, reject) => {
      return runNextCommand(0);
   });
   
   runTransformations.then(() => {
      console.log("done!");
      res.json({'img': toBase64(filepath)});
   })

  
   // }).catch((err) => {
   //    console.error(err);
   //    res.json({'error': 'there was an error processing your image'});
   // });

   // res.json('Image processed!');
});

module.exports = router;
