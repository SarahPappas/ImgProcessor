const express = require('express');

const routes = require('./routes');

const bodyParser = require('body-parser');

app = express();

app.use(bodyParser());

app.use('/', routes);

module.exports = app;