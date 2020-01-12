const express = require('express');

//rotas

const router = express.Router();
router.get('/',(req,res)=>{
    res.send('olá Mundo!');
});

//configurações basicas
const app = express();
app.use('/',router);

module.exports = app;