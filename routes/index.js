const express = require('express');
//rota
const router = express.Router();
router.get('/', (req, res) => {
  res.send('olá Mundo! 2');
});
router.get('/admin', (req, res) => {
  res.send('admin');
});
module.exports = router;
