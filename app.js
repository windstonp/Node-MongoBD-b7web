const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
//configurações basicas
const app = express();
app.use(express.json());
app.use('/', router);
app.use('/admin', router);
app.engine('mst', mustache());
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');
module.exports = app;
