const express = require('express');
//rota
const router = express.Router();
router.get('/', (req, res) => {
  res.json(req.query);

  //GET: req.query
  //POST: req.body
  //parametros da url: req.params
  //SEND: envia texto
  //json: envia json
});
router.get('/posts/:slug', (req, res) => {
  let slug = req.params.slug;
  res.send('slug do post ' + slug);
});
router.get('/admin', (req, res) => {
  res.send('admin');
});
module.exports = router;
