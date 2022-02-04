const compress = require('compression');
const volleyball = require('volleyball');
const express = require('express');
const cors = require('cors');

const app = express();

//Services
const { auth, admin, public } = require('./services');

app.use(volleyball);
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('etag');

//Auth
app.use('/auth', auth);

//Admin
app.use('/admin', admin);

//Public
app.use('/', public);

module.exports = app;
