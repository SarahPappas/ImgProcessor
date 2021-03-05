const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const bodyParser = require('body-parser');

app = express();

app.use(bodyParser());

app.options('*', cors());

app.use('/', routes);

module.exports = app;