const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

//coneção ao DB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  console.error('Erro: ' + error.message);
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log('servidor rodando na porta: ' + server.address().port);
});
