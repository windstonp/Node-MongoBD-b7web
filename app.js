const express = require('express');
const router = require('./routes/index');
//configurações basicas
const app = express();
app.use('/', router);
app.use('/admin', router);
module.exports = app;
