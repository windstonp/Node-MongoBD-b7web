const express = require('express');
//rota
const router = express.Router();
router.get('/', (req, res) => {
  res.render('home', {
    nome: 'bonieky',
    idade: 90
  });
});
module.exports = router;
