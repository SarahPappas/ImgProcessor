// https://github.com/aheckmann/gm
// let fs = require('fs')
//   , gm = require('gm');

const express = require('express');
const router = express.Router();

router.get('/processImg', (req, res, next) => {
   console.log('image processed!');
   res.json('Image processed!');
});

module.exports = router;
