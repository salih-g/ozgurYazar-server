const compress = require('compression');
const volleyball = require('volleyball');
const express = require('express');
const cors = require('cors');

const app = express();

//Services
const { hello } = require('./services/index');

app.use(volleyball);
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('etag');

//Auth

//Admin

//Public
app.use('/', hello);

module.exports = app;
