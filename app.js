const express = require('express');

const routes = require('./routes');

app = express();

app.use('/', routes);

module.exports = app;